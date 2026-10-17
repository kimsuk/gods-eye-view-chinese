// Re-attach this fork's Chinese locale after an upstream merge.
// Does not read or write i18n-local/zh.json.
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function read(rel) {
  return readFileSync(path.join(root, rel), 'utf8');
}

function write(rel, text) {
  writeFileSync(path.join(root, rel), text);
}

let failed = false;

function report(rel, status) {
  console.log(`${rel}: ${status}`);
}

function patchLocale(src) {
  if (src.includes("'zh'") && /zh:\s*['"]中文['"]/.test(src)) return src;
  let next = src;
  if (!next.includes("'zh'")) {
    const updated = next.replace(
      /export const LOCALES = Object\.freeze\(\[([^\]]*)\]\)/,
      (match, inner) => {
        if (inner.includes("'zh'") || inner.includes('"zh"')) return match;
        const body = inner.trim().replace(/,\s*$/, '');
        return `export const LOCALES = Object.freeze([${body}, 'zh'])`;
      },
    );
    if (updated === next) return null;
    next = updated;
  }
  if (!/zh:\s*['"]中文['"]/.test(next)) {
    const updated = next.replace(
      /export const LOCALE_NAMES = Object\.freeze\(\{([\s\S]*?)\}\)/,
      (match, inner) => {
        if (/zh\s*:/.test(inner)) return match;
        const body = inner.trim().replace(/,\s*$/, '');
        return `export const LOCALE_NAMES = Object.freeze({\n  ${body},\n  zh: '中文',\n})`;
      },
    );
    if (updated === next) return null;
    next = updated;
  }
  return next;
}

function patchIndex(src) {
  const marker =
    "import zh from '../../i18n-local/zh.json' with { type: 'json' };";
  let next = src;
  if (!next.includes('i18n-local/zh.json')) {
    const anchor = "import ru from './locales/ru.json' with { type: 'json' };";
    if (!next.includes(anchor)) return null;
    next = next.replace(anchor, `${anchor}\n${marker}`);
  }
  next = next.replace(
    /const CATALOGS = Object\.freeze\(\{\s*es\s*,\s*ru\s*\}\)/,
    'const CATALOGS = Object.freeze({ es, ru, zh })',
  );
  if (!next.includes(marker)) return null;
  if (
    !/const CATALOGS = Object\.freeze\(\{\s*es\s*,\s*ru\s*,\s*zh\s*\}\)/.test(
      next,
    )
  )
    return null;
  return next;
}

function patchI18n(src) {
  const marker = "from '../i18n-local/paths.mjs'";
  if (src.includes(marker)) return src;
  const importAnchor = "import { fileURLToPath } from 'node:url';";
  if (!src.includes(importAnchor)) return null;
  let next = src.replace(
    importAnchor,
    `${importAnchor}\nimport {\n  overlayCatalogPath,\n  overlayLocaleCodes,\n  overlaySameAsEnglish,\n} from '../i18n-local/paths.mjs';`,
  );
  const catalog = `export function catalogPath(locale) {\n  return path.join(LOCALES_DIR, \`\${locale}.json\`);\n}`;
  const catalogNext = `export function catalogPath(locale) {\n  return (\n    overlayCatalogPath(ROOT, locale) ?? path.join(LOCALES_DIR, \`\${locale}.json\`)\n  );\n}`;
  if (!next.includes(catalog)) return null;
  next = next.replace(catalog, catalogNext);
  const shipped = `export function shippedLocales() {\n  return trackedFiles('src/i18n/locales/*.json').map((file) =>\n    path.basename(file, '.json'),\n  );\n}`;
  const shippedNext = `export function shippedLocales() {\n  const official = trackedFiles('src/i18n/locales/*.json').map((file) =>\n    path.basename(file, '.json'),\n  );\n  return [\n    ...official,\n    ...overlayLocaleCodes(trackedFiles('i18n-local/*.json')),\n  ];\n}`;
  if (!next.includes(shipped)) return null;
  next = next.replace(shipped, shippedNext);
  const same = `export function readSameAsEnglish(locale) {\n  const lists = JSON.parse(readFileSync(SAME_AS_ENGLISH, 'utf8'));\n  return new Set(lists[locale] || []);\n}`;
  const sameNext = `export function readSameAsEnglish(locale) {\n  const lists = JSON.parse(readFileSync(SAME_AS_ENGLISH, 'utf8'));\n  return new Set([\n    ...(lists[locale] || []),\n    ...overlaySameAsEnglish(ROOT, locale),\n  ]);\n}`;
  if (!next.includes(same)) return null;
  next = next.replace(same, sameNext);
  return next;
}

function patchBoundaries(src) {
  if (!src.includes('"src/i18n/locales/ru.json"')) return null;
  const lines = src.split('\n');
  const out = [];
  let changed = false;
  for (let i = 0; i < lines.length; i += 1) {
    out.push(lines[i]);
    if (!lines[i].includes('"src/i18n/locales/ru.json"')) continue;
    if ((lines[i + 1] || '').includes('"i18n-local/zh.json"')) continue;
    const indent = lines[i].match(/^\s*/)[0];
    const follower = (lines[i + 1] || '').trim();
    const last = !lines[i].trimEnd().endsWith(',') && follower.startsWith(']');
    if (last) out[out.length - 1] = lines[i].replace(/\s*$/, ',');
    out.push(`${indent}"i18n-local/zh.json"${last ? '' : ','}`);
    changed = true;
  }
  if (!changed) return src;
  return out.join('\n');
}

function apply(rel, transform) {
  const before = read(rel);
  const after = transform(before);
  if (after == null) {
    failed = true;
    report(rel, 'anchor missing — merge this file by hand, then run relink again');
    return;
  }
  if (after === before) {
    report(rel, 'already linked');
    return;
  }
  write(rel, after);
  report(rel, 'linked');
}

apply('src/i18n/locale.js', patchLocale);
apply('src/i18n/index.js', patchIndex);
apply('scripts/i18n.mjs', patchI18n);
apply('scripts/package-boundaries.json', patchBoundaries);

if (failed) process.exitCode = 1;
