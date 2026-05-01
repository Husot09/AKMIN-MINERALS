import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17201f",
        charcoal: "#202524",
        stone: "#6c716c",
        mineral: "#f4f1ea",
        sand: "#d8c8ad",
        clay: "#8f765b",
        oxide: "#674f3e",
        teal: "#4f8075",
        mist: "#dce8e4"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(23, 32, 31, 0.12)"
      },
      backgroundImage: {
        "mineral-grid":
          "linear-gradient(rgba(79,128,117,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(79,128,117,0.09) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
