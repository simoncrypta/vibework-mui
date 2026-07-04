import type { Meta, StoryObj } from "@storybook/react-vite";

import { DocsPage } from "../shared/docs-page";
import { TokenGrid } from "../shared/token-grid";

const radiusTokens = [
  { name: "theme.shape.borderRadius", description: "Default 4px — buttons, inputs" },
  { name: "8px", description: "Cards, panels" },
  { name: "12px", description: "Large surfaces" },
  { name: "9999px", description: "Pills, avatars" },
];

const meta = {
  title: "MUI/Foundations/Shape",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Border radius from theme.shape and component overrides.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Radius: Story = {
  render: () => (
    <DocsPage title="Shape" description="Consistent rounding across components.">
      <TokenGrid
        variant="box"
        columns={3}
        tokens={radiusTokens.map((token) => ({
          ...token,
          previewStyle: {
            borderRadius: token.name.startsWith("theme") ? 4 : token.name.replace("px", ""),
          },
        }))}
      />
    </DocsPage>
  ),
};
