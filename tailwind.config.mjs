/** @type {import('tailwindcss').Config} */

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                xs: '475px',
                '2xl': '1536px'
            },
            colors: {
                midnight: '#0f1829'
            }
        }
    }
}
