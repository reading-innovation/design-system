import { colors } from "./src/styles/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        raised: "0px 0px 0px rgba(9, 30, 66, 0.3)",
        overlay: "0px 2px 12px rgba(9, 30, 66, 0.15)",
      },
      colors: {
        ...colors,
      },
      // Custom spacing
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      // Custom animations
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans)", "sans-serif"],
        "sans-kr": ["var(--font-noto-sans-kr)", "sans-serif"],
      },
      fontSize: {
        "title-lg-b": [
          "56px",
          { lineHeight: "120%", letterSpacing: "-0.032em", fontWeight: "700" },
        ],
        "title-lg-m": [
          "56px",
          { lineHeight: "120%", letterSpacing: "-0.032em", fontWeight: "500" },
        ],
        "title-lg-r": [
          "56px",
          { lineHeight: "120%", letterSpacing: "-0.032em" },
        ],
        "title1-m": [
          "40px",
          { lineHeight: "125%", letterSpacing: "-0.028em", fontWeight: "500" },
        ],
        "title1-b": [
          "40px",
          { lineHeight: "125%", letterSpacing: "-0.028em", fontWeight: "700" },
        ],
        title2: ["36px", { lineHeight: "128%", letterSpacing: "-0.026em" }],
        "title2-b": [
          "36px",
          { lineHeight: "128%", letterSpacing: "-0.026em", fontWeight: "700" },
        ],
        "title3-b": [
          "32px",
          { lineHeight: "130%", letterSpacing: "-0.023em", fontWeight: "700" },
        ],
        "title3-m": [
          "32px",
          { lineHeight: "130%", letterSpacing: "-0.023em", fontWeight: "500" },
        ],
        title3: ["32px", { lineHeight: "130%", letterSpacing: "-0.023em" }],
        "headline1-b": [
          "28px",
          {
            lineHeight: "135%",
            letterSpacing: "-0.015em",
            fontWeight: "700",
          },
        ],
        "headline1-m": [
          "28px",
          {
            lineHeight: "135%",
            letterSpacing: "-0.015em",
            fontWeight: "500",
          },
        ],
        headline1: [
          "28px",
          {
            lineHeight: "135%",
            letterSpacing: "-0.015em",
          },
        ],
        "headline2-b": [
          "24px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.01em",
            fontWeight: "700",
          },
        ],
        "headline2-m": [
          "24px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        headline2: [
          "24px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.01em",
          },
        ],
        "heading1-b": [
          "20px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.008em",
            fontWeight: "700",
          },
        ],
        "heading1-m": [
          "20px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.008em",
            fontWeight: "500",
          },
        ],
        heading1: [
          "20px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.008em",
          },
        ],
        "heading2-b": [
          "18px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.004em",
            fontWeight: "700",
          },
        ],
        "heading2-m": [
          "18px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.004em",
            fontWeight: "500",
          },
        ],
        heading2: [
          "18px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.004em",
          },
        ],
        "body1-b": [
          "16px",
          {
            lineHeight: "140%",
            letterSpacing: "0em",
            fontWeight: "700",
          },
        ],
        "body1-sb": [
          "16px",
          {
            lineHeight: "140%",
            letterSpacing: "0em",
            fontWeight: "600",
          },
        ],
        "body1-m": [
          "16px",
          {
            lineHeight: "140%",
            letterSpacing: "0em",
            fontWeight: "500",
          },
        ],
        body1: [
          "16px",
          {
            lineHeight: "140%",
            letterSpacing: "0em",
          },
        ],
        "body2-b": [
          "14px",
          {
            lineHeight: "140%",
            letterSpacing: "0em",
            fontWeight: "700",
          },
        ],
        "body2-sb": [
          "14px",
          {
            lineHeight: "140%",
            letterSpacing: "0em",
            fontWeight: "600",
          },
        ],
        "body2-m": [
          "14px",
          {
            lineHeight: "140%",
            letterSpacing: "0em",
            fontWeight: "500",
          },
        ],
        body2: [
          "14px",
          {
            lineHeight: "140%",
            letterSpacing: "0em",
          },
        ],
        "caption-b": [
          "12px",
          {
            lineHeight: "133%",
            letterSpacing: "0.025em",
            fontWeight: "700",
          },
        ],
        "caption-m": [
          "12px",
          {
            lineHeight: "133%",
            letterSpacing: "0.025em",
            fontWeight: "500",
          },
        ],
        caption: [
          "12px",
          {
            lineHeight: "133%",
            letterSpacing: "0.025em",
          },
        ],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        // Your custom theme
        "your-theme": {
          primary: "#3b82f6",
          "primary-focus": "#2563eb",
          "primary-content": "#ffffff",

          secondary: "#64748b",
          "secondary-focus": "#475569",
          "secondary-content": "#ffffff",

          accent: "#f59e0b",
          "accent-focus": "#d97706",
          "accent-content": "#ffffff",

          neutral: "#1e293b",
          "neutral-focus": "#0f172a",
          "neutral-content": "#ffffff",

          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#f1f5f9",
          "base-content": "#1e293b",

          info: "#3b82f6",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",

          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.375rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-text-case": "uppercase",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
        // Light theme
        light: {
          primary: "#3b82f6",
          "primary-focus": "#2563eb",
          "primary-content": "#ffffff",

          secondary: "#64748b",
          "secondary-focus": "#475569",
          "secondary-content": "#ffffff",

          accent: "#f59e0b",
          "accent-focus": "#d97706",
          "accent-content": "#ffffff",

          neutral: "#1e293b",
          "neutral-focus": "#0f172a",
          "neutral-content": "#ffffff",

          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#f1f5f9",
          "base-content": "#1e293b",

          info: "#3b82f6",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",
        },
        // Dark theme
        dark: {
          primary: "#3b82f6",
          "primary-focus": "#60a5fa",
          "primary-content": "#ffffff",

          secondary: "#64748b",
          "secondary-focus": "#94a3b8",
          "secondary-content": "#ffffff",

          accent: "#f59e0b",
          "accent-focus": "#fbbf24",
          "accent-content": "#ffffff",

          neutral: "#1e293b",
          "neutral-focus": "#334155",
          "neutral-content": "#ffffff",

          "base-100": "#0f172a",
          "base-200": "#1e293b",
          "base-300": "#334155",
          "base-content": "#f8fafc",

          info: "#3b82f6",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
