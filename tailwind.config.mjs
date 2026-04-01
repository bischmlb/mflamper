/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            // If you had custom colors in your global.css, you might want to move them here eventually
            // But for now, this is empty and fine.
        },
    },
    plugins: [
        // This is the tool we needed
        require('@tailwindcss/typography'),
    ],
}