import type { Config } from "tailwindcss";

const config: Config = {
  // 1. Content: Specify all of your template files (HTML, JS, TSX, Vue, etc.)
  // where Tailwind classes are used. This is crucial for tree-shaking unused styles.
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  darkMode: "class",
  // 2. Theme: This is where you customize the design system.
  // Use 'extend' to add new tokens without overriding Tailwind's defaults.
  theme: {
    extend: {
      // Example: Adding a custom color palette
      colors: {
        "primary-blue": "#1DA1F2",
        "dark-gray": "#1F2937",
      },
      // Example: Customizing font families
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      // Example: Customizing spacing scale
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
    },
  },

  // 3. Plugins: Add external Tailwind plugins here.
  plugins: [],
};

export default config;
