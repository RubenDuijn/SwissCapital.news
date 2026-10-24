#!/usr/bin/env node

import fs from "fs";
import path from "path";

const DEFAULTS = {
  openaiModel: "gpt-4.1",
  claudeModel: "claude-sonnet-4-5",
  reviser: "openai",
  targetAverage: 8,
  minDimension: 7,
  maxIterations: 6,
  timeoutMinutes: 20,
  outputDir: "automation/quality-loop/output",
};

const QUALITY_DIMENSIONS = [
  "analyticalDepth",
  "structuralClarity",
  "evidenceDensity",
  "systemicInsight",
  "institutionalTone",
  "informationCompression",
  "credibilityPerception",
];

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i += 1) {
    const raw = argv[i];
    if (!raw.startsWith("--")) {
      continue;
    }
    const key = raw.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      args[key] = "true";
    } else {
      args[key] = next;
      i += 1;
    }
  }
  return args;
}

function asNumber(input, fallback) {
  const value = Number(input);
  return Number.isFinite(value) ? value : fallback;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readArticle(filePath) {
  const full = path.resolve(filePath);
  if (!fs.existsSync(full)) {
    throw new Error(`Input file not found: ${full}`);
  }

  const raw = fs.readFileSync(full, "utf8");
  if (full.endsWith(".json")) {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed.body)) {
      return parsed.body.join("\n\n");
    }
  }
  return raw;
}

function normalizeScorecard(scorecard) {
  const normalized = {};
  let sum = 0;

  for (const key of QUALITY_DIMENSIONS) {
    const value = Number(scorecard?.[key]);
    const clipped = Number.isFinite(value) ? Math.max(1, Math.min(10, value)) : 1;
    normalized[key] = clipped;
    sum += clipped;
  }

  normalized.average = Number((sum / QUALITY_DIMENSIONS.length).toFixed(2));
  return normalized;
}

function extractJson(text) {
  const first = text.indexOf("{");
  const last = text.lastIndexOf("}");
  if (first === -1 || last === -1 || last <= first) {
    throw new Error("Could not parse model response as JSON.");
  }
  const candidate = text.slice(first, last + 1);
  return JSON.parse(candidate);
}

function qualityPrompt(articleText) {
  return `You are an institutional editorial reviewer for SwissCapital.news.
Return ONLY valid JSON and no markdown.

Use this exact schema:
{
  "scorecard": {
    "analyticalDepth": 1-10,
    "structuralClarity": 1-10,
    "evidenceDensity": 1-10,
    "systemicInsight": 1-10,
    "institutionalTone": 1-10,
    "informationCompression": 1-10,
    "credibilityPerception": 1-10,
    "average": 1-10
  },
  "decision": "publish|revise|reject",
  "strengths": ["..."],
  "weaknesses": ["..."],
  "highImpactEdits": ["..."],
  "bannedPhraseHits": ["..."],
  "uncertainClaims": ["..."],
  "summary": "short paragraph"
}

Scoring standard:
- Institutional, calm, analytical tone.
- Structural mechanism clarity over event commentary.
- Named evidence quality and inspectability.
- Must avoid hype language.

Article text:\n\n${articleText}`;
}

function revisionPrompt(articleText, feedbackBundle) {
  return `Revise the article using the reviewer feedback.

Hard constraints:
- Keep institutional tone.
- Improve mechanism clarity and evidence density.
- Remove generic phrasing and hype terms.
- Keep clear section flow and scenario logic.
- Do not fabricate facts or numbers.

Return only the revised article text. No markdown fences.

Current article:\n\n${articleText}\n\nReviewer feedback:\n${feedbackBundle}`;
}

async function callOpenAI(apiKey, model, prompt) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      messages: [
        {
          role: "system",
          content: "You are a rigorous editorial quality reviewer.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`OpenAI request failed (${response.status}): ${body}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content ?? "";
}

async function callClaude(apiKey, model, prompt) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model,
      max_tokens: 2500,
      temperature: 0.2,
      system: "You are a rigorous editorial quality reviewer.",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Claude request failed (${response.status}): ${body}`);
  }

  const data = await response.json();
  const content = data.content?.[0]?.text;
  return content ?? "";
}

function aggregate(openaiReport, claudeReport) {
  const openaiScore = normalizeScorecard(openaiReport.scorecard);
  const claudeScore = normalizeScorecard(claudeReport.scorecard);

  const merged = {};
  for (const key of QUALITY_DIMENSIONS) {
    merged[key] = Number(((openaiScore[key] + claudeScore[key]) / 2).toFixed(2));
  }
  merged.average = Number(((openaiScore.average + claudeScore.average) / 2).toFixed(2));

  return {
    openaiScore,
    claudeScore,
    mergedScore: merged,
    gatePassed: {
      average: merged.average,
      minDimension: Math.min(...QUALITY_DIMENSIONS.map((k) => merged[k])),
    },
  };
}

function buildFeedback(openaiReport, claudeReport, aggregateReport) {
  return [
    "OpenAI weaknesses:",
    ...(openaiReport.weaknesses || []).map((x) => `- ${x}`),
    "",
    "OpenAI high impact edits:",
    ...(openaiReport.highImpactEdits || []).map((x) => `- ${x}`),
    "",
    "Claude weaknesses:",
    ...(claudeReport.weaknesses || []).map((x) => `- ${x}`),
    "",
    "Claude high impact edits:",
    ...(claudeReport.highImpactEdits || []).map((x) => `- ${x}`),
    "",
    `Merged score: ${aggregateReport.mergedScore.average}`,
  ].join("\n");
}

async function main() {
  const args = parseArgs(process.argv);
  const input = args.input;

  if (!input) {
    throw new Error("Missing required argument: --input <path-to-article>");
  }

  const config = {
    openaiModel: args.openaiModel || DEFAULTS.openaiModel,
    claudeModel: args.claudeModel || DEFAULTS.claudeModel,
    reviser: args.reviser || DEFAULTS.reviser,
    targetAverage: asNumber(args.targetAverage, DEFAULTS.targetAverage),
    minDimension: asNumber(args.minDimension, DEFAULTS.minDimension),
    maxIterations: asNumber(args.maxIterations, DEFAULTS.maxIterations),
    timeoutMinutes: asNumber(args.timeoutMinutes, DEFAULTS.timeoutMinutes),
    noRewrite: args.noRewrite === "true",
    outputDir: path.resolve(args.outputDir || DEFAULTS.outputDir),
  };

  const openaiKey = process.env.OPENAI_API_KEY;
  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  if (!openaiKey || !anthropicKey) {
    throw new Error("OPENAI_API_KEY and ANTHROPIC_API_KEY are required.");
  }

  ensureDir(config.outputDir);

  let articleText = readArticle(input);
  const start = Date.now();
  const timeoutMs = config.timeoutMinutes * 60 * 1000;

  for (let i = 1; i <= config.maxIterations; i += 1) {
    if (Date.now() - start > timeoutMs) {
      console.log(`Timeout reached before iteration ${i}.`);
      break;
    }

    console.log(`Iteration ${i}: running quality checks...`);
    const prompt = qualityPrompt(articleText);

    const [openaiRaw, claudeRaw] = await Promise.all([
      callOpenAI(openaiKey, config.openaiModel, prompt),
      callClaude(anthropicKey, config.claudeModel, prompt),
    ]);

    const openaiReport = extractJson(openaiRaw);
    const claudeReport = extractJson(claudeRaw);
    const aggregateReport = aggregate(openaiReport, claudeReport);

    const iterationDir = path.join(config.outputDir, `iteration-${String(i).padStart(2, "0")}`);
    ensureDir(iterationDir);

    fs.writeFileSync(path.join(iterationDir, "report-openai.json"), JSON.stringify(openaiReport, null, 2));
    fs.writeFileSync(path.join(iterationDir, "report-claude.json"), JSON.stringify(claudeReport, null, 2));
    fs.writeFileSync(path.join(iterationDir, "report-aggregate.json"), JSON.stringify(aggregateReport, null, 2));
    fs.writeFileSync(path.join(iterationDir, "draft.txt"), articleText);

    const minScore = aggregateReport.gatePassed.minDimension;
    const avgScore = aggregateReport.gatePassed.average;
    const pass = avgScore >= config.targetAverage && minScore >= config.minDimension;

    console.log(`Iteration ${i}: merged average=${avgScore}, min-dimension=${minScore}`);

    if (pass) {
      const success = {
        status: "pass",
        iteration: i,
        average: avgScore,
        minDimension: minScore,
        outputDir: iterationDir,
      };
      fs.writeFileSync(path.join(config.outputDir, "result.json"), JSON.stringify(success, null, 2));
      console.log("Quality gate passed.");
      return;
    }

    if (config.noRewrite) {
      continue;
    }

    const feedback = buildFeedback(openaiReport, claudeReport, aggregateReport);
    const revisePrompt = revisionPrompt(articleText, feedback);

    if (config.reviser === "claude") {
      articleText = await callClaude(anthropicKey, config.claudeModel, revisePrompt);
    } else {
      articleText = await callOpenAI(openaiKey, config.openaiModel, revisePrompt);
    }
  }

  const fail = {
    status: "timeout_or_no_pass",
    maxIterations: config.maxIterations,
    timeoutMinutes: config.timeoutMinutes,
  };
  fs.writeFileSync(path.join(config.outputDir, "result.json"), JSON.stringify(fail, null, 2));
  console.log("Quality gate did not pass within limits.");
  process.exitCode = 1;
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
