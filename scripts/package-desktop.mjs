#!/usr/bin/env node
// Build downloadable Chinese desktop packages:
//   release/上帝之眼汉化版-mac.zip       — double-click the .app
//   release/上帝之眼汉化版-windows.zip   — double-click 启动.bat
//
// The app is the Vite server, so each package carries a Node 24 runtime and
// that platform's dependencies. Run from the repo root:
//   node scripts/package-desktop.mjs
import { spawnSync } from 'node:child_process';
import { chmodSync, mkdirSync, writeFileSync, existsSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RELEASE = path.join(ROOT, 'release');
const CACHE = path.join(RELEASE, 'cache');
const NODE_VERSION = 'v24.14.0';

const EXCLUDES = [
  'node_modules',
  '.git',
  'release',
  'dist',
  '.gev-cache',
  '.gev-logs',
  'qa-artifacts',
  'screenshots',
  'qa-shots',
  '.DS_Store',
];

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    cwd: ROOT,
    ...options,
  });
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(' ')} failed (${result.status})`);
  }
}

function stageApp(dest) {
  rmSync(dest, { recursive: true, force: true });
  mkdirSync(dest, { recursive: true });
  const args = ['-a'];
  for (const name of EXCLUDES) args.push('--exclude', name);
  args.push(`${ROOT}/`, `${dest}/`);
  run('rsync', args);
}

function installWindowsDeps(appDir) {
  console.log('正在为 Windows 安装依赖（这一步会下载，需要几分钟）…');
  run(
    'npm',
    ['install', '--os=win32', '--cpu=x64', '--no-audit', '--no-fund'],
    {
    cwd: appDir,
    env: {
      ...process.env,
      PUPPETEER_SKIP_DOWNLOAD: '1',
      PUPPETEER_SKIP_CHROMIUM_DOWNLOAD: '1',
      npm_config_engine_strict: 'false',
    },
  });
}

function copyMacDeps(appDir) {
  console.log('正在复制本机依赖到 Mac 包…');
  run('rsync', ['-a', `${path.join(ROOT, 'node_modules')}/`, `${path.join(appDir, 'node_modules')}/`]);
}

async function download(url, dest) {
  if (existsSync(dest)) return dest;
  mkdirSync(path.dirname(dest), { recursive: true });
  console.log(`下载 ${url}`);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`下载失败 ${response.status} ${url}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  writeFileSync(dest, bytes);
  return dest;
}

function extractNode(archive, destDir) {
  rmSync(destDir, { recursive: true, force: true });
  mkdirSync(destDir, { recursive: true });
  if (archive.endsWith('.zip')) {
    run('ditto', ['-x', '-k', archive, destDir]);
  } else {
    run('tar', ['-xzf', archive, '-C', destDir]);
  }
  return destDir;
}

const MAC_PLIST = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleName</key>
  <string>上帝之眼汉化版</string>
  <key>CFBundleDisplayName</key>
  <string>上帝之眼汉化版</string>
  <key>CFBundleIdentifier</key>
  <string>ai.gods-eye-view.chinese</string>
  <key>CFBundleVersion</key>
  <string>0.2.1</string>
  <key>CFBundleShortVersionString</key>
  <string>0.2.1</string>
  <key>CFBundleExecutable</key>
  <string>launch</string>
  <key>CFBundlePackageType</key>
  <string>APPL</string>
  <key>LSMinimumSystemVersion</key>
  <string>12.0</string>
  <key>NSHighResolutionCapable</key>
  <true/>
</dict>
</plist>
`;

const MAC_LAUNCH = `#!/bin/bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../Resources" && pwd)"
cd "$ROOT/app"
exec "$ROOT/node/bin/node" scripts/desktop-start.mjs
`;

const WINDOWS_BAT = `@echo off
title Gods Eye View
cd /d "%~dp0app"
"%~dp0node\\node.exe" scripts\\desktop-start.mjs
echo.
echo Server stopped. Press any key to close.
pause >nul
`;

const README = `上帝之眼汉化版
================

下载后解压，不需要单独安装 Node。

Mac（Apple 芯片）
  双击「上帝之眼汉化版.app」。
  如果系统提示无法打开，请右键该应用，选择「打开」，再确认一次。
  程序会留在程序坞里。退出：在程序坞图标上右键，选择「退出」。

Windows（64 位）
  双击「启动.bat」。
  会打开一个黑色窗口，并在浏览器里打开中文界面。
  关掉这个窗口，服务器就停止。

浏览器地址是本机 http://127.0.0.1:4173/?lang=zh
第一次打开是中文。数据密钥可以在应用右下角「启动」里添加，不填也能看公开数据。
`;

async function main() {
  mkdirSync(CACHE, { recursive: true });
  const macApp = path.join(RELEASE, 'mac', '上帝之眼汉化版.app');
  const macRoot = path.join(macApp, 'Contents');
  const macResources = path.join(macRoot, 'Resources');
  const winRoot = path.join(RELEASE, 'windows', '上帝之眼汉化版');

  console.log('组装 Mac 应用…');
  stageApp(path.join(macResources, 'app'));
  copyMacDeps(path.join(macResources, 'app'));
  const macArchive = await download(
    `https://nodejs.org/dist/${NODE_VERSION}/node-${NODE_VERSION}-darwin-arm64.tar.gz`,
    path.join(CACHE, `node-${NODE_VERSION}-darwin-arm64.tar.gz`),
  );
  const macExtract = path.join(CACHE, 'node-darwin-arm64');
  extractNode(macArchive, macExtract);
  run('rsync', [
    '-a',
    `${path.join(macExtract, `node-${NODE_VERSION}-darwin-arm64`)}/`,
    `${path.join(macResources, 'node')}/`,
  ]);
  mkdirSync(path.join(macRoot, 'MacOS'), { recursive: true });
  writeFileSync(path.join(macRoot, 'Info.plist'), MAC_PLIST);
  const launchPath = path.join(macRoot, 'MacOS', 'launch');
  writeFileSync(launchPath, MAC_LAUNCH);
  chmodSync(launchPath, 0o755);

  console.log('组装 Windows 包…');
  stageApp(path.join(winRoot, 'app'));
  installWindowsDeps(path.join(winRoot, 'app'));
  const winArchive = await download(
    `https://nodejs.org/dist/${NODE_VERSION}/node-${NODE_VERSION}-win-x64.zip`,
    path.join(CACHE, `node-${NODE_VERSION}-win-x64.zip`),
  );
  const winExtract = path.join(CACHE, 'node-win-x64');
  extractNode(winArchive, winExtract);
  run('rsync', [
    '-a',
    `${path.join(winExtract, `node-${NODE_VERSION}-win-x64`)}/`,
    `${path.join(winRoot, 'node')}/`,
  ]);
  writeFileSync(path.join(winRoot, '启动.bat'), WINDOWS_BAT);

  writeFileSync(path.join(RELEASE, '使用说明.txt'), README);
  const macZip = path.join(RELEASE, '上帝之眼汉化版-mac.zip');
  const winZip = path.join(RELEASE, '上帝之眼汉化版-windows.zip');
  rmSync(macZip, { force: true });
  rmSync(winZip, { force: true });
  run('ditto', ['-c', '-k', '--keepParent', macApp, macZip]);
  run('ditto', ['-c', '-k', '--keepParent', winRoot, winZip]);
  console.log('PACKAGE READY');
  console.log(macZip);
  console.log(winZip);
}

main().catch((error) => {
  console.error(error?.stack || error?.message || error);
  process.exitCode = 1;
});
