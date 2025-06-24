# Reading Innovation's Design System

A design system for Next.js applications with custom Noto Sans fonts, components, and design tokens.

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
yarn add https://github.com/reading-innovation/design-system.git
```

### 2. Add Font Files (Required)

**Important**: You need to add the font files to your project's `public/fonts/` directory:

```bash
# Create fonts directory
mkdir -p public/fonts

# Copy font files from the design system
cp node_modules/@reading-innovation/design-system/fonts/* public/fonts/
```

**Required font files:**

- `NotoSans-VariableFont_wdth,wght.ttf`
- `NotoSansKR-VariableFont_wght.ttf`

### 3. Setup Configuration

**Create `tailwind.config.js`:**

```javascript
const { getTailwindConfig } = require("@reading-innovation/design-system");
module.exports = getTailwindConfig();
```

**Create `postcss.config.js`:**

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

**Import styles in your CSS file:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "@reading-innovation/design-system/src/styles/globals.css";
```

### 4. Start Using Components!

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
        <Button variant="primary">Click me</Button>
      </CardBody>
    </Card>
  );
}
```

## 📋 Setup Checklist

- [ ] Install design system: `yarn add https://github.com/reading-innovation/design-system.git`
- [ ] **Add font files to `public/fonts/`** ⭐
- [ ] Create `tailwind.config.js`
- [ ] Create `postcss.config.js`
- [ ] Import styles in your CSS
- [ ] Start using components!

## 🎨 Available Components

### Button

```tsx
<Button variant="primary" size="md">Primary Button</Button>
<Button variant="outline" size="lg">Outline Button</Button>
<Button loading>Loading...</Button>
```

### Typography

```tsx
<h1 className="font-sans text-title-lg-b">Large Title</h1>
<p className="font-sans text-body1">Body text</p>
<div className="font-sans-kr">한국어 텍스트</div>
```

## 🔧 Development

### Storybook

```bash
yarn storybook  # Start development server
```

### Build

```bash
yarn build     # Build the design system
yarn demo      # View demo
```

## 📚 Font Usage

The design system includes Noto Sans fonts that are automatically loaded when you:

1. **Add font files to `public/fonts/`** (see step 2 above)
2. **Import the design system CSS**

### Font Families

- `font-sans` - Noto Sans (variable font)
- `font-sans-kr` - Noto Sans KR (Korean variant)

### Typography Classes

- `text-title-lg-b`, `text-title1-b`, `text-title2-b` (56px, 40px, 36px)
- `text-headline1-b`, `text-headline2-b` (28px, 24px)
- `text-heading1-b`, `text-heading2-b` (20px, 18px)
- `text-body1`, `text-body2` (16px, 14px)
- `text-caption` (12px)

### Font Weights

- `font-thin` (100) to `font-black` (900)

## 🛠️ Troubleshooting

### Fonts Not Loading?

1. Check that font files are in `public/fonts/`
2. Verify file names match exactly
3. Clear browser cache

### Getting Old Version?

```bash
# Force latest version
yarn add https://github.com/reading-innovation/design-system.git#main

# Or use specific commit
yarn add https://github.com/reading-innovation/design-system.git#0fab8fa
```

## 📦 Project Structure

```
design-system/
├── src/
│   ├── components/     # React components
│   ├── styles/        # Global styles
│   ├── utils/         # Utilities
│   └── index.ts       # Exports
├── fonts/             # Font files (copy to public/fonts/)
└── dist/              # Built files
```

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
