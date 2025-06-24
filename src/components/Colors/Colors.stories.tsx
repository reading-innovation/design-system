import type { Meta, StoryObj } from "@storybook/react";
import { colors } from "../../styles/colors";

const meta: Meta = {
  title: "Colors",
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj;

// Color Swatch Component
const ColorSwatch = ({
  name,
  color,
  showKey = true,
}: {
  name: string;
  color: string;
  showKey?: boolean;
}) => (
  <div className="flex flex-col items-center space-y-2 p-4 border rounded-lg shadow-sm">
    <div
      className="w-16 h-16 rounded-lg border border-gray-100 shadow-sm"
      style={{ backgroundColor: color }}
    />
    {showKey && (
      <div className="text-center">
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-gray-500 font-mono">{color}</div>
      </div>
    )}
  </div>
);

// Color Scale Component
const ColorScale = ({
  name,
  colorObj,
}: {
  name: string;
  colorObj: Record<string, string>;
}) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold capitalize">{name}</h3>
    <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
      {Object.entries(colorObj).map(([key, color]) => (
        <ColorSwatch key={`${name}-${key}`} name={key} color={color} />
      ))}
    </div>
  </div>
);

// Semantic Colors Component
const SemanticColors = ({
  name,
  colorObj,
}: {
  name: string;
  colorObj: Record<string, any>;
}) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold capitalize">{name}</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Object.entries(colorObj).map(([key, value]) => {
        if (typeof value === "string") {
          return (
            <ColorSwatch key={`${name}-${key}`} name={key} color={value} />
          );
        } else if (typeof value === "object") {
          return (
            <div key={`${name}-${key}`} className="space-y-2">
              <h4 className="text-sm font-medium text-gray-700 capitalize">
                {key}
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {Object.entries(value).map(([subKey, subValue]) => (
                  <ColorSwatch
                    key={`${name}-${key}-${subKey}`}
                    name={`${key}.${subKey}`}
                    color={subValue as string}
                  />
                ))}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  </div>
);

// Default story
export const AllColors: Story = {
  render: () => (
    <div className="space-y-12 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Design System Colors</h1>
        <p className="text-gray-600">
          Complete color palette with all variations and semantic colors
        </p>
      </div>

      {/* Base Color Scales */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold border-b pb-2">
          Base Color Scales
        </h2>

        <ColorScale name="Primary" colorObj={colors.primary} />
        <ColorScale name="Accent" colorObj={colors.accent} />
        <ColorScale name="Secondary" colorObj={colors.secondary} />
        <ColorScale name="Neutral" colorObj={colors.neutral} />
        <ColorScale name="Primary Scale" colorObj={colors.primaryScale} />
        <ColorScale name="Orange" colorObj={colors.orange} />
        <ColorScale name="Red" colorObj={colors.red} />
        <ColorScale name="Green" colorObj={colors.green} />
        <ColorScale name="Blue" colorObj={colors.blue} />
      </div>

      {/* Common Colors */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2">Common Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(colors.common).map(([key, color]) => (
            <ColorSwatch key={`common-${key}`} name={key} color={color} />
          ))}
        </div>
      </div>

      {/* Semantic Colors */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold border-b pb-2">
          Semantic Colors
        </h2>

        <SemanticColors name="Label" colorObj={colors.label} />
        <SemanticColors name="Button" colorObj={colors.button} />
        <SemanticColors name="Background" colorObj={colors.background} />
        <SemanticColors name="Surface" colorObj={colors.surface} />
        <SemanticColors name="Control" colorObj={colors.control} />
        <SemanticColors name="Outline" colorObj={colors.outline} />
      </div>
    </div>
  ),
};
