// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss(),]

  },
  adapter: netlify(),
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        rotate: false,
      }
    }
  }
});