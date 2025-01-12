import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from "@astrojs/vercel";
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  adapter: vercel(),
});
