import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const fromRoot = (p: string) => fileURLToPath(new URL(p, import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  build: {
    // The Flask server in ./server serves this folder.
    outDir: 'server/static',
  },
  envDir: './server',
  plugins: [react()],
  resolve: {
    // Mirrored in tsconfig.json "paths".
    alias: {
      '@': fromRoot('./src'),
      public: fromRoot('./public'),
    },
  },
});
