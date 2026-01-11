import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}", // This tells it to look in your app folder
    ],
    theme: {
        extend: {
            fontFamily: {
                // This forces the site to use the beautiful font from your layout
                serif: ["var(--font-garamond)", "serif"],
            },
        },
    },
    plugins: [],
};
export default config;