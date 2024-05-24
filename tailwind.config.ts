import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  media: false,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      backgroundImage: {
        banner: "url('assets/images/bg-header.png')",
      },
      opacity: {
        10: ".1",
        20: ".2",
        30: ".3",
        40: ".4",
        50: ".5",
        60: ".6",
        70: ".7",
        80: ".8",
        90: ".9",
      },
      colors: {
        black: "#231f20",
        blackOd: "#0d0d0d",
        orange: "#ff6239",
        "gray-light": "#a1a1a1",
        blue: "#2b67fd",
        "wh-light": "#f7f7f7",
      },
      screens: {
        desktop: "1920px",
      },
    },
  },
  plugins: [],
};
export default config;
