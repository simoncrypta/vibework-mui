import type { Meta, StoryObj } from "@storybook/react-vite";

import { DocsPage } from "../shared/docs-page";
import { TokenGrid } from "../shared/token-grid";

const spacingSteps = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12];

const meta = {
  title: "MUI/Foundations/Spacing",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Default theme spacing uses an 8px grid via theme.spacing(n).",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Scale: Story = {
  render: () => (
    <DocsPage
      title="Spacing"
      description="Rhythmic spacing — use Stack spacing, sx padding, or Tailwind gap utilities on wrappers."
    >
      <TokenGrid
        variant="bar"
        columns={3}
        tokens={spacingSteps.map((step) => ({
          name: `theme.spacing(${step})`,
          description: `${step * 8}px default`,
          previewStyle: { width: `${step * 8}px`, minWidth: step === 0 ? 2 : undefined },
        }))}
      />
    </DocsPage>
  ),
};
