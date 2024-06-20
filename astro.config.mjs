import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: import.meta.env.PUBLIC_URL,
  integrations: [tailwind(), icon({
    iconDir: 'public/icons'
  })],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'lv']
  },
  output: "server",
  adapter: netlify()
});