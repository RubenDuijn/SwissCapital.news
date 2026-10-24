#!/usr/bin/env node

import fs from "fs";
import path from "path";

const resultPath = path.resolve(process.argv[2] || "automation/quality-loop/output/result.json");

if (!fs.existsSync(resultPath)) {
  console.error(`Missing result file: ${resultPath}`);
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(resultPath, "utf8"));

if (data.status !== "pass") {
  console.error("Quality gate has not passed. Stop push/publish and improve the draft.");
  console.error(JSON.stringify(data, null, 2));
  process.exit(1);
}

console.log("Quality gate passed.");
console.log(JSON.stringify(data, null, 2));
