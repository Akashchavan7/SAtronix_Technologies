/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0a0a0a",
        surface: "#101118",
        card: "#131520",
        border: "rgba(255,255,255,0.08)",
        neon: {
          blue: "#38bdf8",
          purple: "#8b5cf6",
          cyan: "#22d3ee",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(56, 189, 248, 0.18)",
        panel: "0 24px 80px rgba(2, 6, 23, 0.55)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "neon-radial":
          "radial-gradient(circle at top, rgba(56, 189, 248, 0.24), transparent 34%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.2), transparent 28%)",
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        pulseGlow: "pulseGlow 3.8s ease-in-out infinite",
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
