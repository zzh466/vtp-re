import { defineConfig } from 'vite';
import { resolve } from 'node:path';
// https://vitejs.dev/config
export default defineConfig({
    resolve: {
    alias: {
      '@utils': resolve(__dirname, 'src/utils') // 将 @ 映射到 src 目录
    }
  }
});
