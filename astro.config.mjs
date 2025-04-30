import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from "@astrojs/vercel";
import tailwind from '@astrojs/tailwind';
import auth from 'auth-astro';

export default defineConfig({
  integrations: [react(), tailwind(), auth()],
  adapter: vercel(),
});
