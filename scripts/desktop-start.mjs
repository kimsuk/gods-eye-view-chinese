#!/usr/bin/env node
// Desktop launcher for the Chinese edition. Starts the local server and opens
// the browser in Chinese. Closing this window stops the server.
import { spawn } from 'node:child_process';
import { realpathSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const MODULE_PATH = fileURLToPath(import.meta.url);
const ROOT = realpathSync(path.resolve(path.dirname(MODULE_PATH), '..'));

/**
 * The page the desktop package opens. `?lang=zh` wins over the browser
 * language, so an English system still starts in Chinese.
 * @param {number} port
 */
export function desktopUrl(port) {
  return `http://127.0.0.1:${port}/?lang=zh`;
}

/**
 * A command that opens `url` in the default browser.
 * @param {NodeJS.Platform} platform
 * @param {string} url
 * @returns {{command: string, args: string[]}}
 */
export function browserCommand(platform, url) {
  if (platform === 'win32') return { command: 'cmd', args: ['/c', 'start', '', url] };
  if (platform === 'darwin') return { command: 'open', args: [url] };
  return { command: 'xdg-open', args: [url] };
}

function openBrowser(url) {
  const { command, args } = browserCommand(process.platform, url);
  const child = spawn(command, args, {
    detached: true,
    stdio: 'ignore',
    windowsHide: true,
  });
  child.unref();
}

async function start() {
  process.chdir(ROOT);
  const requested = Number.parseInt(process.env.PORT ?? '4173', 10);
  const port = Number.isInteger(requested) ? requested : 4173;
  console.log('正在启动上帝之眼汉化版…');
  const { createServer } = await import('vite');
  const server = await createServer({
    root: ROOT,
    server: {
      host: '127.0.0.1',
      port,
      strictPort: false,
    },
  });
  await server.listen();
  const address = server.httpServer?.address();
  const actual = typeof address === 'object' && address ? address.port : port;
  const url = desktopUrl(actual);
  console.log(`已在浏览器打开 ${url}`);
  console.log('关闭这个窗口就会停止服务器。');
  openBrowser(url);
  for (const signal of ['SIGINT', 'SIGTERM']) {
    process.once(signal, async () => {
      await server.close();
      process.exit(0);
    });
  }
}

const invoked = process.argv[1] ? path.resolve(process.argv[1]) : '';
let launchedDirectly = false;
try {
  launchedDirectly =
    invoked.length > 0 && realpathSync(invoked) === realpathSync(MODULE_PATH);
} catch {
  launchedDirectly = invoked === MODULE_PATH;
}
if (launchedDirectly) {
  start().catch((error) => {
    console.error(`启动失败：${error?.message || error}`);
    process.exitCode = 1;
  });
}
