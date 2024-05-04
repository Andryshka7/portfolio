import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
    prefetch: true,
    integrations: [tailwind()],
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ru', 'lv']
    }
})
