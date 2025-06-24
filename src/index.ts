export { tailwindConfig as getTailwindConfig } from "./tailwind.config";

export { Button } from "./components/Button/Button";
export type { ButtonProps } from "./components/Button/Button";
export { cn } from "./utils/cn";

// Export font utilities
export {
  fontCSSVariables,
  FONT_FAMILIES,
  FONT_WEIGHTS,
  getFontFamily,
  getFontWeight,
  fontClasses,
  typographyClasses,
} from "./utils/fonts";

// Export colors for use in other projects
export { colors } from "./styles/colors";
