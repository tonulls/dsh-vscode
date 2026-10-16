// scripts/build.mjs — esbuild 构建脚本
// 用法：node scripts/build.mjs            # 构建扩展与桥接客户端
//       node scripts/build.mjs --watch    # 监听模式
import { build, context } from 'esbuild';
import { rmSync } from 'node:fs';
import { join } from 'node:path';
import { buildBridgeClient } from './bridge-build.mjs';

const watch = process.argv.includes('--watch');

const common = {
  bundle: true,
  platform: 'node',
  format: 'cjs',
  target: 'node20',
  sourcemap: true,
  logLevel: 'info',
};

// 扩展入口：external vscode（由 VS Code 宿主提供）
const ext = {
  entryPoints: ['src/extension.ts'],
  outfile: 'out/extension.js',
  external: ['vscode'],
  ...common,
};

// 卸载钩子入口：VS Code 卸载扩展时执行（node ./out/uninstall.js），随扩展包分发
const uninstall = {
  entryPoints: ['src/uninstall.ts'],
  outfile: 'out/uninstall.js',
  ...common,
};

// 桥接客户端构建：把 core.js 的纯逻辑内联进 client.js 工厂注册 bundle（逻辑见 scripts/bridge-build.mjs）。
// 构建时刷新 out/bridge-client/，保证产物与源码一致。
const bridgeBuildOpts = {
  coreSource: join('bridge-client', 'lib', 'core.js'),
  clientTemplate: join('bridge-client', 'lib', 'client.js'),
  outDir: join('out', 'bridge-client'),
};

// 构建前清空 out/，避免旧产物残留。
rmSync(join(process.cwd(), 'out'), { recursive: true, force: true });

const configs = [ext, uninstall];
if (watch) {
  await Promise.all(configs.map((c) => context(c).then((ctx) => ctx.watch())));
  // 监听模式下桥接客户端仅构建一次（未对 core.js/client.js 挂 watcher，改动需重启 watch）
  buildBridgeClient(bridgeBuildOpts);
  console.log('watch 模式已启动');
} else {
  await Promise.all(configs.map((c) => build(c)));
  buildBridgeClient(bridgeBuildOpts);
  console.log('构建完成');
}
