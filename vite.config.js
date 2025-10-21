import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default ({ mode }) => {
  // Load environment variables for the current mode
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        // Use the VITE_CONTENT_FOLDER directly from the loaded env
        '@content': path.resolve(__dirname, `src/content/${env.VITE_MODE_FOLDER || 'live'}`),
        '@assets': path.resolve(__dirname, `src/assets/${env.VITE_MODE_FOLDER || 'live'}`),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};