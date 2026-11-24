import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'node',
    // The default is 5 s. The zip tests take about 1 s each on a quiet machine, but on a busy one (a load
    // average above 20 was seen) they pass alone and time out when every test file runs side by side.
    // A slow pass is still a pass; a test that hangs still fails.
    testTimeout: 30_000,
  },
});
