import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"], // 👈 Ensures everything inside the app folder gets styled
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
