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
        dark: {
          "primary-text": "#AAAAAA",
          "secondary-text": "#777E88",
          "light-gray": "#AAAAAA",
          "gray": "#2F3237",
          "dark-gray": "#18191B",
          "primary": "#A20021",
          "secondary": "#8F001D",
        }
      },

    },
  },
  plugins: [],
};
export default config;
