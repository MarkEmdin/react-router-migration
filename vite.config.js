import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    global: 'globalThis',
  },
  plugins: [reactRouter(), tailwindcss()],
  ssr: {
    noExternal: [/@rescui\//, /highlight\.js/],
  },
});
