import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import eslintPlugin from 'vite-plugin-eslint';
/** @type {import('vite').UserConfig} */
export default {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
  plugins: [
    // 配置 vite 在运行的时候自动检测 eslint 规范
    eslintPlugin({
      lintOnStart: true,
      cache: false,
    }),
    AutoImport({
      imports: [{ three: [['*', 'THREE']] }],
    }),
  ],
  server: {
    port: 3000,
  },
};
