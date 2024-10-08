import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Definindo cores personalizadas usando variáveis CSS
        foreground: "var(--foreground)",
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],  // Fonte principal
        inter: ['Inter', 'sans-serif'],  // Fonte secundária
      },
    },
  },
  plugins: [],
};

export default config;
