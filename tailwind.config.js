/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
