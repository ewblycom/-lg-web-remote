import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' — относительные пути к ассетам, чтобы сборка работала
// на GitHub Pages в подпапке (https://<user>.github.io/<repo>/)
// без необходимости прописывать имя репозитория.
export default defineConfig({
  plugins: [react()],
  base: './',
  server: { host: true },
});

