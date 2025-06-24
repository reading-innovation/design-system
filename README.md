# Reading Innovation's Design System

A design system for Next.js applications. This repository can be used directly from GitHub in your projects.

## 🎯 Purpose

This repository contains:

- **Design Tokens**: Custom color palettes, typography, spacing, and animations
- **Component Library**: Reusable React components built with DaisyUI
- **Theme System**: Light, dark, and custom themes
- **Configuration**: Tailwind CSS and DaisyUI setup optimized for Reading Innovation
- **Storybook**: Interactive component documentation and testing environment

## 🚀 Quick Start

### 1. Install the Design System

```bash
# Using yarn
yarn add https://github.com/reading-innovation/design-system.git

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
@import "@reading-innovation/design-system/src/styles/globals.css";
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

## 📚 Storybook

This design system includes Storybook for interactive component documentation and testing.

### Running Storybook

```bash
# Start the development server
yarn storybook

# Build for production
yarn build-storybook
```

Storybook will be available at `http://localhost:6006`

### Features

- **Interactive Controls**: Modify component props in real-time
- **Component Documentation**: Auto-generated docs with usage examples
- **Responsive Testing**: Test components at different screen sizes
- **Accessibility Testing**: Built-in a11y tools
- **Theme Switching**: Test components with different themes

### Available Stories

- **Welcome**: Introduction to the design system
- **Button**: All button variants, sizes, and states
- **More components coming soon...**

For detailed Storybook documentation, see [STORYBOOK.md](./STORYBOOK.md).

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
yarn build
```

### Development Mode

```bash
yarn dev
```

### Clean Build

```bash
yarn clean
```

### View Demo

```bash
yarn demo
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

## Font Usage

This design system includes custom Noto Sans fonts that are automatically available to consuming packages.

### Automatic Font Loading

The fonts are automatically loaded when you import the design system's CSS. Simply import the styles in your consuming package:

```typescript
// In your main CSS file or _app.tsx
import "@reading-innovation/design-system/dist/styles.css";
```

### Font Families

The design system provides two font families:

- **`font-sans`** - Noto Sans (variable font with width and weight axes)
- **`font-sans-kr`** - Noto Sans KR (Korean variant)

### Using Fonts in Tailwind CSS

```tsx
// Regular Noto Sans
<div className="font-sans">This uses Noto Sans</div>

// Korean Noto Sans
<div className="font-sans-kr">이것은 Noto Sans KR을 사용합니다</div>

// With typography classes
<h1 className="font-sans text-title-lg-b">Large Title</h1>
<p className="font-sans text-body1">Body text</p>
```

### Using Fonts in JavaScript/TypeScript

```typescript
import {
  FONT_FAMILIES,
  FONT_WEIGHTS,
  getFontFamily,
  getFontWeight,
  fontClasses,
  typographyClasses,
} from "@reading-innovation/design-system";

// Get font family CSS value
const sansFont = getFontFamily("sans"); // 'var(--font-noto-sans)'
const krFont = getFontFamily("sans-kr"); // 'var(--font-noto-sans-kr)'

// Get font weight
const boldWeight = getFontWeight("bold"); // 700

// Get CSS classes
const fontClass = fontClasses.sans; // 'font-sans'
const titleClass = typographyClasses["title-lg-b"]; // 'text-title-lg-b'
```

### Manual Font Setup (if needed)

If you need to set up fonts manually, you can use the provided CSS variables:

```typescript
import { fontCSSVariables } from "@reading-innovation/design-system";

// Inject the CSS variables into your app
const style = document.createElement("style");
style.textContent = fontCSSVariables;
document.head.appendChild(style);
```

### Typography Scale

The design system includes a comprehensive typography scale with the following classes:

#### Titles

- `text-title-lg-b`, `text-title-lg-m`, `text-title-lg-r` (56px)
- `text-title1-b`, `text-title1-m` (40px)
- `text-title2-b`, `text-title2` (36px)
- `text-title3-b`, `text-title3-m`, `text-title3` (32px)

#### Headlines

- `text-headline1-b`, `text-headline1-m`, `text-headline1` (28px)
- `text-headline2-b`, `text-headline2-m`, `text-headline2` (24px)

#### Headings

- `text-heading1-b`, `text-heading1-m`, `text-heading1` (20px)
- `text-heading2-b`, `text-heading2-m`, `text-heading2` (18px)

#### Body Text

- `text-body1-b`, `text-body1-sb`, `text-body1-m`, `text-body1` (16px)
- `text-body2-b`, `text-body2-sb`, `text-body2-m`, `text-body2` (14px)

#### Captions

- `text-caption-b`, `text-caption-m`, `text-caption` (12px)

### Font Weights

The variable fonts support weights from 100 to 900:

- `font-thin` (100)
- `font-extralight` (200)
- `font-light` (300)
- `font-normal` (400)
- `font-medium` (500)
- `font-semibold` (600)
- `font-bold` (700)
- `font-extrabold` (800)
- `font-black` (900)

## 🛠️ Development Workflow

### Local Development Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/reading-innovation/design-system.git
   cd design-system
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Start development mode**:

   ```bash
   # Start Storybook for component development
   yarn storybook

   # Or build and serve demo
   yarn demo
   ```

### Development Commands

```bash
# Build the design system
yarn build

# Clean build artifacts
yarn clean

# Run Storybook development server
yarn storybook

# Build Storybook for production
yarn build-storybook

# Serve demo (requires build first)
yarn demo

# Type checking
yarn tsc --noEmit
```

### Project Structure

```
design-system/
├── src/
│   ├── components/          # React components
│   │   ├── Button/
│   │   ├── Colors/
│   │   └── Typography/
│   ├── styles/             # Global styles and design tokens
│   │   ├── colors.ts       # Color definitions
│   │   └── globals.css     # Global CSS
│   ├── utils/              # Utility functions
│   │   ├── cn.ts           # Class name utility
│   │   └── fonts.ts        # Font utilities
│   ├── tailwind.config.ts  # Tailwind configuration
│   └── index.ts            # Main exports
├── fonts/                  # Font files
├── dist/                   # Built files (generated)
└── stories/                # Storybook stories
```

## 🔄 Updating the Design System

### Making Changes

1. **Create a feature branch**:

   ```bash
   git checkout -b feature/new-component
   ```

2. **Make your changes**:

   - Add new components in `src/components/`
   - Update design tokens in `src/styles/`
   - Modify Tailwind config in `src/tailwind.config.ts`
   - Update exports in `src/index.ts`

3. **Test your changes**:

   ```bash
   # Build the design system
   yarn build

   # Test in Storybook
   yarn storybook

   # Test in a consuming project (see below)
   ```

4. **Update version and publish**:
   ```bash
   # Update version in package.json
   # Commit and push changes
   git add .
   git commit -m "feat: add new component"
   git push origin feature/new-component
   ```

### Version Management

The design system uses semantic versioning:

- **Patch** (1.0.1): Bug fixes, no breaking changes
- **Minor** (1.1.0): New features, backward compatible
- **Major** (2.0.0): Breaking changes

### Publishing Updates

1. **Update version in `package.json`**:

   ```json
   {
     "version": "1.1.0"
   }
   ```

2. **Create a release**:

   ```bash
   git tag v1.1.0
   git push origin v1.1.0
   ```

3. **Consuming projects can update**:

   ```bash
   # Update to latest version
   yarn upgrade @reading-innovation/design-system

   # Or pin to specific version
   yarn add https://github.com/reading-innovation/design-system.git#v1.1.0
   ```

## 📦 Using in Other Packages

### Installation Methods

Direct GitHub Installation (Recommended)

```bash
# Install from GitHub
yarn add https://github.com/reading-innovation/design-system.git

# Or pin to specific version
yarn add https://github.com/reading-innovation/design-system.git#v1.0.0
```

### Integration Steps

1. **Install the design system** (see methods above)

2. **Configure Tailwind CSS**:

   ```javascript
   // tailwind.config.js
   const { getTailwindConfig } = require("@reading-innovation/design-system");

   module.exports = getTailwindConfig();
   ```

3. **Import styles**:

   ```css
   /* globals.css */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   @import "@reading-innovation/design-system/src/styles/globals.css";
   ```

4. **Use components**:

   ```tsx
   import { Button, Card } from "@reading-innovation/design-system";

   export default function MyPage() {
     return (
       <Card>
         <Button variant="primary">Hello World</Button>
       </Card>
     );
   }
   ```
