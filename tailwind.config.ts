import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spectra: {
          orange: "#FF3B00",
          red: "#8C0000",
          black: "#000000",
          light: "#D9D9D9",
          white: "#FFFFFF",
          ink: "#0D0E12"
        }
      },
      boxShadow: {
        glow: "0 0 60px rgba(255,59,0,0.2)",
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at 20% 20%, rgba(255,59,0,0.18), rgba(0,0,0,0) 45%), radial-gradient(circle at 80% 80%, rgba(140,0,0,0.18), rgba(0,0,0,0) 50%)"
      }
    },
  },
  plugins: [],
};

export default config;
