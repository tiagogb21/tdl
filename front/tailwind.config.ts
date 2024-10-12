import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                project: {
                    blue: {
                      light: '#4EA8DE',
                      dark: '#1E6F9F',
                    },
                    purple: {
                      light: '#8284FA',
                      dark: '#5E60CE',
                    },
                    danger: '#E25858',
                    gray: {
                        100: "#F2F2F2",
                        200: "#D9D9D9",
                        300: "#808080",
                        400: "#333333",
                        500: "#262626",
                        600: "#1A1A1A",
                        700: "#0D0D0D",
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
