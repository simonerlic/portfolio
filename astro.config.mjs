import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './remark-reading-time.mjs';


import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://simonerlic.com',
  integrations: [sitemap(), tailwind(), preact(), mdx()],
  output: "server",
  adapter: cloudflare(),
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});