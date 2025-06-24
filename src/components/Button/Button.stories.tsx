import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "accent", "ghost", "link", "outline"],
      description: "The visual style variant of the button",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg"],
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

// Primary variant
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

// Secondary variant
export const Secondary: Story = {
  args: {
    variant: "primary",
    children: "Secondary Button",
  },
};

// Accent variant
export const Accent: Story = {
  args: {
    variant: "accent",
    children: "Accent Button",
  },
};

// Ghost variant
export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

// Link variant
export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
};

// Outline variant
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

// Size variants
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Buttons come in four different sizes: xs, sm, md, and lg.",
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

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-2xl">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available button variants displayed together.",
      },
    },
  },
};

// Interactive playground
export const Playground: Story = {
  args: {
    variant: "primary",
    size: "md",
    loading: false,
    disabled: false,
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
