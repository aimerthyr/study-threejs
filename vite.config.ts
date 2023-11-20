import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@core': path.resolve(__dirname, './src/core'),
    },
  },
  plugins: [
    // eslint(),
    AutoImport({
      include: [/\.[tj]s?$/],
      imports: [{ three: [['*', 'THREE']] }],
      eslintrc: {
        enabled: true,
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
