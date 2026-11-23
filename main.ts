// Entry point for make.fun bring-the-humans-03 (Node 22, standard library only).
// Reads VIDEO.json from the repository root, verifies its JSON structure,
// and writes the exact bytes to /output/VIDEO.json for the sealed gate scorer.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const MAX_VIDEO_JSON_BYTES = 16384;
const MAX_URL_LENGTH = 2048;
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function validateVideoRecord(parsed: unknown): string {
  if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error('VIDEO.json must contain a JSON object');
  }

  const record = parsed as Record<string, unknown>;
  if (typeof record.url !== 'string') {
    throw new Error('VIDEO.json must contain a string "url" field');
  }

  const trimmed = record.url.trim();
  if (trimmed.length === 0 || trimmed.length > MAX_URL_LENGTH) {
    throw new Error(`VIDEO.json "url" length out of bounds (${trimmed.length} chars)`);
  }

  return trimmed;
}

function loadVideoPayload(sourcePath: string): Buffer {
  const raw = readFileSync(sourcePath);
  if (raw.byteLength === 0 || raw.byteLength > MAX_VIDEO_JSON_BYTES) {
    throw new Error(`VIDEO.json size out of bounds (${raw.byteLength} bytes)`);
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw.toString('utf8'));
  } catch (err) {
    throw new Error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  }

  validateVideoRecord(parsed);
  return raw;
}

function stageVideoFile(botDir: string, outputDir: string): void {
  const sourceFile = join(botDir, 'VIDEO.json');
  const targetFile = join(outputDir, 'VIDEO.json');
  const payload = loadVideoPayload(sourceFile);
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(targetFile, payload);
}

try {
  stageVideoFile(BOT_DIR, OUTPUT_DIR);
} catch (err) {
  console.error(`Failed to stage VIDEO.json: ${(err as Error).message}`);
  process.exit(1);
}
