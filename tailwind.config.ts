import { heroui } from "@heroui/theme";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta", "sans-serif"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        primary: {
          DEFAULT: "#249781",
          light: "#8BDDCD",
          lighter: "#DAF6F1",
        },
        light: {
          DEFAULT: "#FFFFFF",
          secondary: "#F6F6F6",
        },
        dark: {
          DEFAULT: "#121933",
          secondary: "#495270",
          tertiary: "#172F53",
        },
        information: {
          error: "#FF313D",
          warning: "#FFA141",
          info: "#00A3B8",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
