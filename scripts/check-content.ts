import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";

const MARKER = "[À COMPLÉTER";
const SOURCE_DIR = join(process.cwd(), "src");
const SCANNED_FILE = /\.(json|mdx|ts|tsx)$/;
const isProduction = process.env.VERCEL_ENV === "production";

function findMarkers(): string[] {
  const entries = readdirSync(SOURCE_DIR, {
    recursive: true,
    withFileTypes: true,
  });

  return entries
    .filter((entry) => entry.isFile() && SCANNED_FILE.test(entry.name))
    .flatMap((entry) => {
      const path = join(entry.parentPath, entry.name);
      return readFileSync(path, "utf8")
        .split("\n")
        .flatMap((line, index) =>
          line.includes(MARKER)
            ? [`${relative(process.cwd(), path)}:${index + 1}: ${line.trim()}`]
            : [],
        );
    });
}

function flattenKeys(value: unknown, prefix = ""): string[] {
  if (typeof value !== "object" || value === null) {
    return [prefix];
  }
  return Object.entries(value).flatMap(([key, child]) =>
    flattenKeys(child, prefix ? `${prefix}.${key}` : key),
  );
}

function readMessageKeys(locale: string): Set<string> {
  const path = join(SOURCE_DIR, "i18n", "messages", `${locale}.json`);
  return new Set(flattenKeys(JSON.parse(readFileSync(path, "utf8"))));
}

function findMissingTranslations(): string[] {
  const fr = readMessageKeys("fr");
  const en = readMessageKeys("en");

  return [
    ...[...fr].filter((key) => !en.has(key)).map((key) => `en: ${key}`),
    ...[...en].filter((key) => !fr.has(key)).map((key) => `fr: ${key}`),
  ];
}

const markers = findMarkers();
const missingTranslations = findMissingTranslations();

if (missingTranslations.length > 0) {
  console.error("Missing translations:");
  missingTranslations.forEach((key) => console.error(`  ${key}`));
}

if (markers.length > 0) {
  console.warn(`${markers.length} content marker(s) left to complete:`);
  markers.forEach((marker) => console.warn(`  ${marker}`));
}

if (missingTranslations.length > 0 || (isProduction && markers.length > 0)) {
  process.exit(1);
}
