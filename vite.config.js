import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    {
      name: 'dotenv',
      resolveId(id) {
        if (id === 'dotenv') return id;
      },
      load(id) {
        if (id!== 'dotenv') return;
        const dotenv = require('dotenv');
        dotenv.config({ path: '.env' });
      },
    },
  ],
});