import type { Meta, StoryObj } from "@storybook/react-vite";

import { DocsPage } from "../shared/docs-page";
import { TokenGrid } from "../shared/token-grid";

const elevationLevels = [1, 2, 4, 8, 16, 24];

const meta = {
  title: "MUI/Foundations/Elevation",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Shadow tokens from theme.shadows for Paper, Card, and AppBar.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Shadows: Story = {
  render: () => (
    <DocsPage title="Elevation" description="Shadow scale for layered UI.">
      <TokenGrid
        variant="box"
        columns={3}
        tokens={elevationLevels.map((level) => ({
          name: `--mui-shadows-${level}`,
          description: `Elevation ${level}`,
          previewStyle: { boxShadow: `var(--mui-shadows-${level})` },
        }))}
      />
    </DocsPage>
  ),
};
