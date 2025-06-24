import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Typography",
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj;

export const TitleStyles: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Title Styles</h2>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-700">Title Large</h3>
        <div className="space-y-2">
          <p className="text-title-lg-b">Title Large Bold (56px, 700)</p>
          <p className="text-title-lg-m">Title Large Medium (56px, 500)</p>
          <p className="text-title-lg-r">Title Large Regular (56px, 400)</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-700">Title 1</h3>
        <div className="space-y-2">
          <p className="text-title1-b">Title 1 Bold (40px, 700)</p>
          <p className="text-title1-m">Title 1 Medium (40px, 500)</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-700">Title 2</h3>
        <div className="space-y-2">
          <p className="text-title2-b">Title 2 Bold (36px, 700)</p>
          <p className="text-title2">Title 2 Regular (36px, 400)</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-700">Title 3</h3>
        <div className="space-y-2">
          <p className="text-title3-b">Title 3 Bold (32px, 700)</p>
          <p className="text-title3-m">Title 3 Medium (32px, 500)</p>
          <p className="text-title3">Title 3 Regular (32px, 400)</p>
        </div>
      </div>
    </div>
  ),
};

export const HeadlineStyles: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Headline Styles</h2>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-700">Headline 1</h3>
        <div className="space-y-2">
          <p className="text-headline1-b">Headline 1 Bold (28px, 700)</p>
          <p className="text-headline1-m">Headline 1 Medium (28px, 500)</p>
          <p className="text-headline1">Headline 1 Regular (28px, 400)</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-700">Headline 2</h3>
        <div className="space-y-2">
          <p className="text-headline2-b">Headline 2 Bold (24px, 700)</p>
          <p className="text-headline2-m">Headline 2 Medium (24px, 500)</p>
          <p className="text-headline2">Headline 2 Regular (24px, 400)</p>
        </div>
      </div>
    </div>
  ),
};

export const HeadingStyles: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Heading Styles</h2>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-700">Heading 1</h3>
        <div className="space-y-2">
          <p className="text-heading1-b">Heading 1 Bold (20px, 700)</p>
          <p className="text-heading1-m">Heading 1 Medium (20px, 500)</p>
          <p className="text-heading1">Heading 1 Regular (20px, 400)</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-700">Heading 2</h3>
        <div className="space-y-2">
          <p className="text-heading2-b">Heading 2 Bold (18px, 700)</p>
          <p className="text-heading2-m">Heading 2 Medium (18px, 500)</p>
          <p className="text-heading2">Heading 2 Regular (18px, 400)</p>
        </div>
      </div>
    </div>
  ),
};

export const BodyStyles: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Body Styles</h2>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-700">Body 1 (16px)</h3>
        <div className="space-y-2">
          <p className="text-body1-b">Body 1 Bold (16px, 700)</p>
          <p className="text-body1-sb">Body 1 Semi Bold (16px, 600)</p>
          <p className="text-body1-m">Body 1 Medium (16px, 500)</p>
          <p className="text-body1">Body 1 Regular (16px, 400)</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-700">Body 2 (14px)</h3>
        <div className="space-y-2">
          <p className="text-body2-b">Body 2 Bold (14px, 700)</p>
          <p className="text-body2-sb">Body 2 Semi Bold (14px, 600)</p>
          <p className="text-body2-m">Body 2 Medium (14px, 500)</p>
          <p className="text-body2">Body 2 Regular (14px, 400)</p>
        </div>
      </div>
    </div>
  ),
};

export const CaptionStyles: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Caption Styles</h2>
      <h3 className="text-lg font-bold text-gray-700">Caption (12px)</h3>
      <div className="space-y-2">
        <p className="text-caption-b">Caption Bold (12px, 700)</p>
        <p className="text-caption-m">Caption Medium (12px, 500)</p>
        <p className="text-caption">Caption Regular (12px, 400)</p>
      </div>
    </div>
  ),
};

export const FontFamilies: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Font Families</h2>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-700">Noto Sans (Default)</h3>
        <div className="space-y-2">
          <p className="font-sans text-body1">
            The quick brown fox jumps over the lazy dog.
          </p>
          <p className="font-sans text-body1">
            빠른 갈색 여우가 게으른 개를 뛰어넘습니다.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-700">Noto Sans KR</h3>
        <div className="space-y-2">
          <p className="font-sans-kr text-body1">
            The quick brown fox jumps over the lazy dog.
          </p>
          <p className="font-sans-kr text-body1">
            빠른 갈색 여우가 게으른 개를 뛰어넘습니다.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const AllTypographyStyles: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h1 className="text-title-lg-b mb-4">Complete Typography System</h1>
        <p className="text-body1 text-base-content mb-8">
          This showcases all available typography styles in your design system.
        </p>
      </div>

      {/* Title Styles */}
      <div>
        <h2 className="text-headline1-b mb-4">Title Styles</h2>
        <div className="space-y-2">
          <p className="text-title-lg-b">Title Large Bold</p>
          <p className="text-title1-b">Title 1 Bold</p>
          <p className="text-title2-b">Title 2 Bold</p>
          <p className="text-title3-b">Title 3 Bold</p>
        </div>
      </div>

      {/* Headline Styles */}
      <div>
        <h2 className="text-headline1-b mb-4">Headline Styles</h2>
        <div className="space-y-2">
          <p className="text-headline1-b">Headline 1 Bold</p>
          <p className="text-headline2-b">Headline 2 Bold</p>
        </div>
      </div>

      {/* Heading Styles */}
      <div>
        <h2 className="text-headline1-b mb-4">Heading Styles</h2>
        <div className="space-y-2">
          <p className="text-heading1-b">Heading 1 Bold</p>
          <p className="text-heading2-b">Heading 2 Bold</p>
        </div>
      </div>

      {/* Body Styles */}
      <div>
        <h2 className="text-headline1-b mb-4">Body Styles</h2>
        <div className="space-y-2">
          <p className="text-body1-b">Body 1 Bold</p>
          <p className="text-body1">Body 1 Regular</p>
          <p className="text-body2-b">Body 2 Bold</p>
          <p className="text-body2">Body 2 Regular</p>
        </div>
      </div>

      {/* Caption Styles */}
      <div>
        <h2 className="text-headline1-b mb-4">Caption Styles</h2>
        <div className="space-y-2">
          <p className="text-caption-b">Caption Bold</p>
          <p className="text-caption">Caption Regular</p>
        </div>
      </div>
    </div>
  ),
};
