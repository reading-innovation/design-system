import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Button Component

A versatile button component with three visual emphasis levels and three sizes designed for different use cases.

### Variants
- **Strong** (High emphasis): Primary actions and calls to action with blue background
- **Outline** (Medium emphasis): Secondary actions with border styling
- **Ghost** (Low emphasis): Tertiary actions with minimal visual weight

### Sizes
- **xs** (36px height, 12px padding): Secondary/tertiary actions in data tables
- **sm** (44px height, 16px padding): Default size for primary actions
- **big** (54px height, 20px padding): Special contexts needing visual emphasis

### States
- **Default**: Normal appearance
- **Hover**: Enhanced styling on mouse over
- **Pressed**: Active state when clicked
- **Disabled**: Grayed out and non-interactive
- **Loading**: Shows spinner animation

### Features
- Left icon support (default plus icon or custom icons)
- Consistent typography using design system fonts
- Semantic color usage from design system palette
- Focus states for accessibility
- Smooth transitions between states
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["strong", "outline", "ghost"],
      description: "The visual emphasis level of the button",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "big"],
      description: "The size of the button",
    },
    loading: {
      control: { type: "boolean" },
      description: "Whether the button is in a loading state",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
    leftIcon: {
      control: { type: "boolean" },
      description: "Whether to show the default plus icon on the left",
    },
    children: {
      control: { type: "text" },
      description: "The content inside the button",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: "Button",
  },
};

// Strong variant (high emphasis)
export const Strong: Story = {
  args: {
    variant: "strong",
    children: "Strong Button",
  },
  parameters: {
    docs: {
      description: {
        story: "High emphasis button for primary actions and calls to action.",
      },
    },
  },
};

// Outline variant (medium emphasis)
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
  parameters: {
    docs: {
      description: {
        story: "Medium emphasis button with border styling.",
      },
    },
  },
};

// Ghost variant (low emphasis)
export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
  parameters: {
    docs: {
      description: {
        story: "Low emphasis button for secondary or tertiary actions.",
      },
    },
  },
};

// Button with left icon
export const WithLeftIcon: Story = {
  args: {
    leftIcon: true,
    children: "Add Item",
  },
  parameters: {
    docs: {
      description: {
        story: "Button with the default plus icon on the left side.",
      },
    },
  },
};

// Custom left icon
export const WithCustomIcon: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button
        leftIcon={
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 5L9 5M5 1L5 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }>
        Custom Icon
      </Button>
      <Button
        leftIcon={
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 2L8 8M8 2L2 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }>
        Close
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Buttons with custom icons passed as React nodes.",
      },
    },
  },
};

// Size variants
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small (Default)</Button>
      <Button size="big">Big</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Buttons come in three different sizes: xs (secondary actions), sm (default, primary actions), and big (special emphasis).",
      },
    },
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 max-w-2xl">
      <Button variant="strong">Strong</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All three button variants: strong (high emphasis), outline (medium emphasis), and ghost (low emphasis).",
      },
    },
  },
};

// Button states
export const States: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-2xl">
      <Button variant="strong">Default</Button>
      <Button variant="strong" disabled>
        Disabled
      </Button>
      <Button variant="outline">Default</Button>
      <Button variant="outline" disabled>
        Disabled
      </Button>
      <Button variant="ghost">Default</Button>
      <Button variant="ghost" disabled>
        Disabled
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Button states: default, hover (on mouse over), pressed (on click), and disabled.",
      },
    },
  },
};

// Loading state
export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading...",
  },
  parameters: {
    docs: {
      description: {
        story: "Button in loading state with a spinner animation.",
      },
    },
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
  parameters: {
    docs: {
      description: {
        story: "Button in disabled state.",
      },
    },
  },
};

// Interactive playground
export const Playground: Story = {
  args: {
    variant: "strong",
    size: "sm",
    loading: false,
    disabled: false,
    leftIcon: false,
    children: "Playground Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground to test different button configurations.",
      },
    },
  },
};
