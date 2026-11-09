// Builds the website for the desktop app (`npm run build:desktop`, see `tauri/tauri.conf.json`).
// The environment variables are set here rather than in the npm script: `VAR=value command` only
// works in the shells of macOS and Linux, while npm runs the scripts with cmd.exe on Windows.
import { spawnSync } from 'node:child_process';

const { status } = spawnSync('vite build', {
    // `vite` is found in node_modules/.bin, which npm adds to the PATH of its scripts
    shell: true,
    stdio: 'inherit',
    env: { ...process.env, BUILD_TARGET: 'desktop', BASE_PATH: '' },
});
process.exit(status ?? 1);
