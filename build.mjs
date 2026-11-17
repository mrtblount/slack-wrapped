// Bundles the engine into dist/: a command-line tool and two library entry points.
import { build } from 'esbuild';

const shared = { bundle: true, format: 'esm', target: 'es2022', legalComments: 'none', logLevel: 'info' };
await build({ ...shared, entryPoints: ['src/engine/cli.ts'], outfile: 'dist/cli.mjs', platform: 'node', banner: { js: '#!/usr/bin/env node' } });
await build({ ...shared, entryPoints: ['src/engine/index.ts'], outfile: 'dist/index.mjs', platform: 'neutral', mainFields: ['module', 'main'] });
await build({ ...shared, entryPoints: ['src/engine/node.ts'], outfile: 'dist/node.mjs', platform: 'node' });
