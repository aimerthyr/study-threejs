import path from 'path';
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
  ],
  server: {
    port: 3000,
  },
};
