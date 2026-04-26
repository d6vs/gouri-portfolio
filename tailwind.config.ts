import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        s: "16rem",
        m: "24rem",
        l: "64rem",
        xl: "90rem",
      },
      height: {
        s: "16rem",
        m: "24rem",
        l: "64rem",
        xl: "90rem",
      },
    },
  },
};

export default config;
