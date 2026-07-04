import type { Meta, StoryObj } from "@storybook/react-vite";

import { DocsPage } from "../shared/docs-page";
import { TokenGrid } from "../shared/token-grid";

const semanticColors = [
  { name: "--mui-palette-primary-main", description: "Primary brand" },
  { name: "--mui-palette-secondary-main", description: "Secondary accent" },
  { name: "--mui-palette-background-default", description: "Page background" },
  { name: "--mui-palette-background-paper", description: "Cards, panels" },
  { name: "--mui-palette-text-primary", description: "Primary text" },
  { name: "--mui-palette-text-secondary", description: "Secondary text" },
  { name: "--mui-palette-divider", description: "Borders, dividers" },
];

const statusColors = [
  { name: "--mui-palette-success-main", description: "Success" },
  { name: "--mui-palette-error-main", description: "Error" },
  { name: "--mui-palette-warning-main", description: "Warning" },
  { name: "--mui-palette-info-main", description: "Info" },
];

function colorTokens(entries: { name: string; description?: string }[]) {
  return entries.map((entry) => ({
    ...entry,
    previewStyle: { backgroundColor: `var(${entry.name})` },
  }));
}

const meta = {
  title: "MUI/Foundations/Color",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Semantic palette tokens exposed as CSS variables when cssVariables is enabled on the theme.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Semantic: Story = {
  render: () => (
    <DocsPage
      title="Color"
      description="Palette tokens from createTheme({ cssVariables: true }). Tailwind utilities like text-primary map to the same variables."
    >
      <TokenGrid title="Semantic" tokens={colorTokens(semanticColors)} columns={3} />
      <TokenGrid title="Status" tokens={colorTokens(statusColors)} columns={3} />
    </DocsPage>
  ),
};
