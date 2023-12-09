import path from 'path';
import { defineConfig } from 'vite';
export default defineConfig({
  server: {
    port: 3100,
    host: '0.0.0.0',
  },
  // 这里要和远端仓库路径一致
  base: '/study-threejs/',
  build: {
    outDir: path.join(__dirname, '../../dist/exhibition'),
  },
});
