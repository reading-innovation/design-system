import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import { colors } from "./styles/colors";

export const tailwindConfig: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./demo/**/*.{js,ts,jsx,tsx,html}",
    "./node_modules/@reading-innovation/design-system/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      animation: {
        "fade-in": "fadeIn 3s ease-in-out",
        "slide-up": "slideUp 3s ease-out",
        "slide-down": "slideDown 3s ease-out",
        "scale-in": "scaleIn 3s ease-out",
        scale: "scaleIn 3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
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
  plugins: [
    daisyui,
    plugin(({ matchUtilities }) => {
      matchUtilities(
        {
          radius: (value: string) => ({ "border-radius": value }),
        },
        {
          values: {
            sm: "4px",
            md: "8px",
            lg: "12px",
            xl: "20px",
            "2xl": "28px",
            full: "999px",
          },
        },
      );
    }),
  ],
};
