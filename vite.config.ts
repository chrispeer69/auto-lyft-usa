import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    // Ship source maps so this site can always be recovered / debugged from
    // production — this project itself was rebuilt from a deployed bundle.
    sourcemap: true,
    chunkSizeWarningLimit: 800,
  },
});
