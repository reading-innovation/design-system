# Reading Innovation's Design System

A DaisyUI-based design system for Next.js applications. This repository can be used directly from GitHub in your projects.

## 🎯 Purpose

This repository contains:

- **Design Tokens**: Custom color palettes, typography, spacing, and animations
- **Component Library**: Reusable React components built with DaisyUI
- **Theme System**: Light, dark, and custom themes
- **Configuration**: Tailwind CSS and DaisyUI setup optimized for Reading Innovation

## 🚀 Quick Start

### 1. Install the Design System

```bash
# Using yarn
yarn add https://github.com/reading-innovation/design-system.git

# Using npm
npm install https://github.com/reading-innovation/design-system.git
```

Or add to your `package.json`:

```json
{
  "dependencies": {
    "@reading-innovation/design-system": "https://github.com/reading-innovation/design-system.git"
  }
}
```

### 2. Create Tailwind Config (One-time setup)

Create `tailwind.config.js` in your project root:

```javascript
const { getTailwindConfig } = require("@reading-innovation/design-system");

/** @type {import('tailwindcss').Config} */
module.exports = getTailwindConfig();
```

### 3. Create PostCSS Config (One-time setup)

Create `postcss.config.js` in your project root:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### 4. Import Styles

In your main CSS file (e.g., `app/globals.css` or `styles/globals.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import the design system styles */
@import "@reading-innovation/design-system/src/styles/input.css";
```

### 5. Set Theme

In your root layout or component:

```tsx
// app/layout.tsx or pages/_app.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="reading-innovation">
      <body>{children}</body>
    </html>
  );
}
```

### 6. Start Using Components!

```tsx
import {
  Button,
  Card,
  CardBody,
  CardTitle,
} from "@reading-innovation/design-system";

export default function MyComponent() {
  return (
    <Card>
      <CardBody>
        <CardTitle>Hello World</CardTitle>
        <p>This is a card component from the design system.</p>
        <Button variant="primary">Click me</Button>
      </CardBody>
    </Card>
  );
}
```

That's it! 🎉 Your design system is now ready to use.

## 🎨 Available Components

### Button

```tsx
import { Button } from "@reading-innovation/design-system";

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="accent">Accent</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="outline">Outline</Button>

// Sizes
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Loading state
<Button loading>Loading...</Button>
```

### Card

```tsx
import {
  Card,
  CardBody,
  CardTitle,
  CardActions,
} from "@reading-innovation/design-system";

<Card variant="default">
  <CardBody>
    <CardTitle>Card Title</CardTitle>
    <p>Card content goes here.</p>
    <CardActions>
      <Button variant="primary">Action</Button>
    </CardActions>
  </CardBody>
</Card>;
```

## 🌙 Theme System

### Available Themes

- `reading-innovation`: Reading Innovation's custom brand theme
- `light`: Clean, modern light theme
- `dark`: Elegant dark theme

### Theme Switching

```tsx
import { themes, type Theme } from "@reading-innovation/design-system";

function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("reading-innovation");

  const toggleTheme = () => {
    const newTheme =
      theme === "reading-innovation" ? "dark" : "reading-innovation";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <Button onClick={toggleTheme}>
      Switch to {theme === "reading-innovation" ? "Dark" : "Reading Innovation"}{" "}
      Mode
    </Button>
  );
}
```

## 🎯 Customization

### Adding Custom Themes

Extend the themes in your `tailwind.config.js`:

```javascript
const { getTailwindConfig } = require("@reading-innovation/design-system");

const baseConfig = getTailwindConfig();

module.exports = {
  ...baseConfig,
  daisyui: {
    ...baseConfig.daisyui,
    themes: [
      ...baseConfig.daisyui.themes,
      {
        "my-custom-theme": {
          primary: "#your-primary-color",
          secondary: "#your-secondary-color",
          // ... other color definitions
        },
      },
    ],
  },
};
```

### Extending Components

You can extend the design system components:

```tsx
import { Button, type ButtonProps } from "@reading-innovation/design-system";

interface CustomButtonProps extends ButtonProps {
  icon?: React.ReactNode;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  icon,
  children,
  ...props
}) => {
  return (
    <Button {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Button>
  );
};
```

## 🔧 Development

### Building the Design System

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

### Clean Build

```bash
npm run clean
```

## 📋 Complete Setup Checklist

1. ✅ **Install design system**: `yarn add https://github.com/reading-innovation/design-system.git`
2. ✅ **Create tailwind.config.js** (one line with `getTailwindConfig()`)
3. ✅ **Create postcss.config.js** (standard config)
4. ✅ **Import styles** in your CSS file
5. ✅ **Set theme** in your layout
6. ✅ **Start using components!**

## 🔄 Version Control

You can pin to specific versions:

```json
{
  "dependencies": {
    "@reading-innovation/design-system": "https://github.com/reading-innovation/design-system.git#v1.0.0"
  }
}
```

Or use specific commits:

```json
{
  "dependencies": {
    "@reading-innovation/design-system": "https://github.com/reading-innovation/design-system.git#commit-hash"
  }
}
```

## 🤝 Contributing

1. Fork this repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT - Feel free to use this design system in Reading Innovation's projects.
