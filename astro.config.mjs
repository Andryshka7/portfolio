import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'

export default defineConfig({
    prefetch: true,
    integrations: [tailwind(), icon({ iconDir: 'public/icons' })],
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ru', 'lv']
    }
})
