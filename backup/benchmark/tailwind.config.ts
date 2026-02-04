import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '9xl': '96rem',
      },
      colors: {
        'booth-maroon': '#800020',
        'booth-teal': '#005757',
        'booth-dark-gray': '#333333',
        'booth-light-gray': '#666666',
        'booth-bg-gray': '#f5f5f5',
      },
      fontFamily: {
        'trade-gothic': ['TradeGothic', 'sans-serif'],
        'trade-gothic-bold': ['TradeGothicBold', 'sans-serif'],
        'trade-gothic-light': ['TradeGothicLight', 'sans-serif'],
        'trade-gothic-light-italic': ['TradeGothicLightItalic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
