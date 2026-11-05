import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { paper: "#fbf8f1", ink: "#14213d", cyan: "#00aeef", magenta: "#ec008c", sun: "#ffd400" },
    fontFamily: { display: ["var(--font-display)", "sans-serif"], body: ["var(--font-body)", "sans-serif"] },
    keyframes: { marquee: { to: { transform: "translateX(-50%)" } }, float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } } },
    animation: { marquee: "marquee 30s linear infinite", float: "float 5s ease-in-out infinite" },
  } },
  plugins: [],
};
export default config;
