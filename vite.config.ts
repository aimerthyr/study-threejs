import path from 'path';
import { defineConfig } from 'vite';
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@core': path.resolve(__dirname, './src/core'),
    },
  },
  plugins: [],
  server: {
    port: 3000,
  },
});
