// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),  // Path to your popup HTML
        background: resolve(__dirname, 'src/scripts/background.ts'),  // Background script
        contentScript: resolve(__dirname, 'src/scripts/contentScript.ts')  // Content script
      },
      output: {
        dir: 'dist',
        format: 'esm',  // Use ES module format, suitable for Chrome Extensions
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  }
});
