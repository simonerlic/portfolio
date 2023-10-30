import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://simonerlic.com',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  output: "server",
  adapter: cloudflare()
});