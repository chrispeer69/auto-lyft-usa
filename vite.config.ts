import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    // Ship source maps so this site can always be recovered / debugged from production.
    sourcemap: true,
  },
});
