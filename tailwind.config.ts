import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'clampTitle': 'clamp(32px, 3.8889vw, 56px)',
        'clampContent': 'clamp(12px, 1.111vw, 16px)',
        'clampBody': 'clamp(360px, 1vw, 1380px)',
        'clampTextBox': 'clamp(12px, 1.111vw, 16px)',
        'width': 'calc(100vw - (100vw - 100%))'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'sm': '320px',
        'md': '480px',
        'lg': '768px',
        'xl': '1024px',
        '2xl': '1440px',
        '3xl': '1600px',
        '4xl': '1792px',
        '5xl': '2048px',
      }
    },
  },
  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],
};
export default config;
