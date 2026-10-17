// Fork-local locale catalogs. Upstream never ships this directory, so merging
// new upstream code does not overwrite the translations stored here.
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const LOCALE_FILE = /^i18n-local\/[a-z]{2,3}\.json$/;

/** Absolute catalog path when this fork ships `locale`, else null. */
export function overlayCatalogPath(root, locale) {
  if (!/^[a-z]{2,3}$/.test(locale)) return null;
  const file = path.join(root, 'i18n-local', `${locale}.json`);
  return existsSync(file) ? file : null;
}

/** Locale codes for overlay catalogs among the given tracked JSON paths. */
export function overlayLocaleCodes(files) {
  return files
    .map((file) => file.replaceAll('\\', '/'))
    .filter((file) => LOCALE_FILE.test(file))
    .map((file) => path.basename(file, '.json'));
}

/** Extra same-as-English allowlist entries for one overlay locale. */
export function overlaySameAsEnglish(root, locale) {
  const file = path.join(root, 'i18n-local', 'same-as-english.json');
  if (!existsSync(file)) return [];
  const lists = JSON.parse(readFileSync(file, 'utf8'));
  const entries = lists[locale];
  return Array.isArray(entries) ? entries : [];
}
