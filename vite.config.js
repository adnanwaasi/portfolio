import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/adnanwaasi/portfolio/', // The name of your GitHub repository
});
// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
