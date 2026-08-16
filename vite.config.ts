import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    outDir: 'dist',
    // Ship source maps so this site can always be recovered / debugged from
    // production — this project itself was rebuilt from a deployed bundle.
    sourcemap: true,
    rollupOptions: {
      output: {
        // Client only. In the SSR build React is an external module, and
        // naming it here fails the build outright.
        //
        // Splitting vendor code means a content change does not invalidate the
        // React bundle in everyone's browser cache, and the chunks download in
        // parallel. Supabase is a lazy dynamic import and gets its own chunk.
        manualChunks: isSsrBuild
          ? undefined
          : {
              react: ['react', 'react-dom'],
              router: ['react-router-dom'],
              icons: ['lucide-react'],
            },
      },
    },
  },
}));
