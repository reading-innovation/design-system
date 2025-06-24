/**
 * Font utilities for the Reading Innovation Design System
 *
 * This file provides CSS variables and utility functions for using
 * the Noto Sans fonts in consuming packages.
 */

// CSS variables for font families
export const fontCSSVariables = `
  :root {
    --font-noto-sans: 'Noto Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-noto-sans-kr: 'Noto Sans KR', 'Noto Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
`;

// Font family constants
export const FONT_FAMILIES = {
  sans: "var(--font-noto-sans)",
  "sans-kr": "var(--font-noto-sans-kr)",
} as const;

// Font weight constants
export const FONT_WEIGHTS = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

// Utility function to get font family
export const getFontFamily = (family: keyof typeof FONT_FAMILIES) => {
  return FONT_FAMILIES[family];
};

// Utility function to get font weight
export const getFontWeight = (weight: keyof typeof FONT_WEIGHTS) => {
  return FONT_WEIGHTS[weight];
};

// CSS class utilities
export const fontClasses = {
  sans: "font-sans",
  "sans-kr": "font-sans-kr",
} as const;

// Typography scale utilities (matching the Tailwind config)
export const typographyClasses = {
  // Title classes
  "title-lg-b": "text-title-lg-b",
  "title-lg-m": "text-title-lg-m",
  "title-lg-r": "text-title-lg-r",
  "title1-b": "text-title1-b",
  "title1-m": "text-title1-m",
  "title2-b": "text-title2-b",
  title2: "text-title2",
  "title3-b": "text-title3-b",
  "title3-m": "text-title3-m",
  title3: "text-title3",

  // Headline classes
  "headline1-b": "text-headline1-b",
  "headline1-m": "text-headline1-m",
  headline1: "text-headline1",
  "headline2-b": "text-headline2-b",
  "headline2-m": "text-headline2-m",
  headline2: "text-headline2",

  // Heading classes
  "heading1-b": "text-heading1-b",
  "heading1-m": "text-heading1-m",
  heading1: "text-heading1",
  "heading2-b": "text-heading2-b",
  "heading2-m": "text-heading2-m",
  heading2: "text-heading2",

  // Body classes
  "body1-b": "text-body1-b",
  "body1-sb": "text-body1-sb",
  "body1-m": "text-body1-m",
  body1: "text-body1",
  "body2-b": "text-body2-b",
  "body2-sb": "text-body2-sb",
  "body2-m": "text-body2-m",
  body2: "text-body2",

  // Caption classes
  "caption-b": "text-caption-b",
  "caption-m": "text-caption-m",
  caption: "text-caption",
} as const;
