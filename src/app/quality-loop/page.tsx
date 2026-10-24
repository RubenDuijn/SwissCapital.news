import fs from "fs";
import path from "path";

type GateResult = {
  status?: string;
  iteration?: number;
  average?: number;
  minDimension?: number;
  outputDir?: string;
  maxIterations?: number;
  timeoutMinutes?: number;
};

function readResult(): GateResult | null {
  const filePath = path.join(process.cwd(), "automation/quality-loop/output/result.json");
  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw) as GateResult;
  } catch {
    return null;
  }
}

export default function QualityLoopPage() {
  const result = readResult();

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl text-ink">Quality Loop Review</h1>
      <p className="mt-4 text-muted">
        This page shows the latest quality-loop status from local output files.
      </p>

      {!result && (
        <div className="mt-8 rounded-xl border border-border p-5">
          <p className="text-ink">No result found yet.</p>
          <p className="mt-2 text-sm text-muted">
            Run the loop first using the article quality script, then refresh this page.
          </p>
        </div>
      )}

      {result && (
        <div className="mt-8 rounded-xl border border-border p-5">
          <p className="text-sm uppercase tracking-[0.12em] text-muted">Latest Result</p>
          <p className="mt-3 text-2xl text-ink">Status: {result.status ?? "unknown"}</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>Iteration: {result.iteration ?? "n/a"}</li>
            <li>Average score: {result.average ?? "n/a"}</li>
            <li>Min dimension: {result.minDimension ?? "n/a"}</li>
            <li>Max iterations: {result.maxIterations ?? "n/a"}</li>
            <li>Timeout minutes: {result.timeoutMinutes ?? "n/a"}</li>
            <li>Output folder: {result.outputDir ?? "automation/quality-loop/output"}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
