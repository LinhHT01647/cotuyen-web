/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0F",
        surface: "#120A0A",
        "surface-2": "#1A1010",
        primary: {
          DEFAULT: "#DA0000",
          light: "#FF2020",
          dark: "#A00000",
        },
        gold: {
          DEFAULT: "#F5C518",
          light: "#FFD740",
          dark: "#C9A227",
        },
        accent: {
          DEFAULT: "#FF4444",
          light: "#FF6B6B",
          dark: "#CC0000",
        },
        text: {
          primary: "#F5EDE0",
          muted: "#9CA3AF",
          dim: "#6B7280",
        },
        border: "#2A1515",
      },
      fontFamily: {
        heading: ["Rajdhani", "sans-serif"],
        display: ["Cinzel", "serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom, rgba(10,10,15,0) 0%, rgba(10,10,15,0.6) 50%, rgba(10,10,15,1) 100%)",
        "red-gradient":
          "linear-gradient(135deg, #DA0000 0%, #FF2020 50%, #A00000 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #C9A227 0%, #F5C518 50%, #FFD740 100%)",
        "fire-gradient":
          "linear-gradient(135deg, #DA0000 0%, #FF4500 40%, #FF6B00 100%)",
        "vietnam-gradient":
          "linear-gradient(135deg, #DA0000 0%, #8B0000 100%)",
        "dark-red-vignette":
          "radial-gradient(ellipse at center, rgba(218,0,0,0.08) 0%, rgba(10,10,15,0) 70%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        glow: "glow 2s ease-in-out infinite alternate",
        "glow-red": "glowRed 2s ease-in-out infinite alternate",
        flicker: "flicker 3s ease-in-out infinite",
        "float-flag": "floatFlag 4s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #C9A227, 0 0 10px #C9A227" },
          "100%": { boxShadow: "0 0 20px #C9A227, 0 0 40px #C9A22750" },
        },
        glowRed: {
          "0%": { boxShadow: "0 0 10px #DA0000, 0 0 20px #DA000050" },
          "100%": { boxShadow: "0 0 30px #DA0000, 0 0 60px #DA000030, 0 0 80px #DA000015" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        floatFlag: {
          "0%, 100%": { transform: "rotate(-2deg) scale(1)" },
          "50%": { transform: "rotate(2deg) scale(1.02)" },
        },
      },
      boxShadow: {
        red: "0 0 30px rgba(218, 0, 0, 0.5)",
        "red-sm": "0 0 15px rgba(218, 0, 0, 0.3)",
        gold: "0 0 20px rgba(245, 197, 24, 0.4)",
        card: "0 4px 24px rgba(0,0,0,0.6)",
        "card-red": "0 4px 24px rgba(218, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
