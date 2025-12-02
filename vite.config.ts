import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel의 Root Directory 설정과 맞물려 작동하도록 기본 경로를 지정합니다.
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    // 빌드 시 청크 크기 경고 무시 (이미지 등이 많을 때 유용)
    chunkSizeWarningLimit: 1000,
  },
});