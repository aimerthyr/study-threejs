import path from 'path';
import { defineConfig } from 'vite';
export default defineConfig({
  server: {
    port: 3100,
    host: '0.0.0.0',
  },
  build: {
    outDir: path.join(__dirname, '../../dist/exhibition'),
  },
});
