import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontsFamily: {
        prompt: "Prompt, sans-serif",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        subHeading: "var(--color-subHeading)",
        paragraph: "var(--color-paragraph)",
        background: "var(--color-background)",
        background2: "var(--color-background2)",
        background3: "var(--color-background3)",
        holo: "-webkit-text-stroke:5px black, -webkit-text-fill-color:transparent",
      },
      animation: {
        wiggle: "wiggle 700ms ease-in-out",
        "visible-from-left":
          "visible-from-left 1.5s cubic-bezier(0.785, 0.135, 0.150, 0.860)",
        "visible-from-right":
          "visible-from-right 1.5s cubic-bezier(0.785, 0.135, 0.150, 0.860) ",
        "visible-from-up":
          "visible-from-up 1s cubic-bezier(0.785, 0.135, 0.150, 0.860)",
        "visible-from-down":
          "visible-from-down 1s cubic-bezier(0.785, 0.135, 0.150, 0.860)",
      },
      transitionTimingFunction: {
        "in-out-circ": "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
        "in-out-expo": "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(8deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "visible-from-up": {
          "0%": { translate: "0 30% 0", opacity: "0" },
          "100%": { translate: "0 0 0", opacity: "1" },
        },
        "visible-from-down": {
          "0%": { translate: "0 -30% 0", opacity: "0" },
          "100%": { translate: "0 0 0", opacity: "1" },
        },
        "visible-from-left": {
          "0%": { translate: "-30% 0 0", opacity: "0" },
          "100%": { translate: "0 0 0", opacity: "1" },
        },
        "visible-from-right": {
          "0%": { translate: "30% 0 0", opacity: "0" },
          "100%": { translate: "0 0 0", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
  // purge: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.jsx"],
};
export default config;
