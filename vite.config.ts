import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';
export default defineConfig({
  plugins: [
    // eslint(),
    AutoImport({
      include: [/\.[tj]s?$/],
      imports: [{ three: [['*', 'THREE']] }],
      eslintrc: {
        enabled: true,
      },
    })
  ],
  server: {
    port: 3000,
  },
});
