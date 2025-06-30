import type { Meta, StoryObj } from "@storybook/react";
import { SpeechBubble } from "./SpeechBubble";

const meta: Meta<typeof SpeechBubble> = {
  title: "Components/SpeechBubble",
  component: SpeechBubble,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A horizontal speech bubble component with a tail/pointer that can be positioned on the left or right side, featuring an optional icon and text layout.",
      },
    },
  },
  argTypes: {
    text: {
      control: { type: "text" },
      description: "The text content for the speech bubble",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Hello! This is a speech bubble.",
  },
  parameters: {
    docs: {
      description: {
        story: "Speech bubble with tail positioned on the left side.",
      },
    },
  },
};

// Example with icon and text as children
export const WithIcon: Story = {
  render: () => (
    <SpeechBubble text="">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">📚</span>
        </div>
        <span className="text-heading2-m text-label-secondary">
          Hi! Let's take a look at the cover of the book.
        </span>
      </div>
    </SpeechBubble>
  ),
  parameters: {
    docs: {
      description: {
        story: "Speech bubble with custom icon and text layout as children.",
      },
    },
  },
};

// Example with complex layout as children
export const ComplexLayout: Story = {
  render: () => (
    <SpeechBubble text="">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <span className="text-heading2-m text-label-secondary font-semibold">
            Success!
          </span>
        </div>
        <p className="text-sm text-label-secondary">
          Your changes have been saved successfully.
        </p>
      </div>
    </SpeechBubble>
  ),
  parameters: {
    docs: {
      description: {
        story: "Speech bubble with complex multi-line layout as children.",
      },
    },
  },
};

// Example with button as children
export const WithButton: Story = {
  render: () => (
    <SpeechBubble text="">
      <div className="flex items-center gap-3">
        <span className="text-heading2-m text-label-secondary">
          Would you like to continue?
        </span>
        <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
          Yes
        </button>
        <button className="px-3 py-1 bg-gray-300 text-gray-700 rounded text-sm hover:bg-gray-400">
          No
        </button>
      </div>
    </SpeechBubble>
  ),
  parameters: {
    docs: {
      description: {
        story: "Speech bubble with interactive buttons as children.",
      },
    },
  },
};

// Interactive playground
export const Playground: Story = {
  args: {
    text: "Interactive playground speech bubble",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground to test different speech bubble configurations.",
      },
    },
  },
};
