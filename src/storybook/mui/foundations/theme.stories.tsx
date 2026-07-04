import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { DocsPage } from "../shared/docs-page";
import { TokenGrid } from "../shared/token-grid";

const meta = {
  title: "MUI/Foundations/Theme",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Vibework uses createTheme({ cssVariables: true }) from src/app/theme.ts via Providers.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTheme: Story = {
  render: () => (
    <DocsPage
      title="Theme"
      description="Customize palette, typography, and component defaults in src/app/theme.ts — Tailwind reads the same CSS variables."
    >
      <Stack spacing={4}>
        <Card variant="outlined">
          <CardContent>
            <Stack spacing={1.5}>
              <Typography sx={{ fontWeight: 500 }}>Active theme</Typography>
              <Typography variant="body2" color="text.secondary">
                Storybook uses the same Emotion shell + theme as the app. Use the toolbar theme
                switcher (light / dark) from @storybook/addon-themes. Emotion styles sit in the{" "}
                <code>@layer mui</code> cascade so Tailwind utilities can override when needed.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
        <TokenGrid
          title="Sample palette tokens"
          columns={3}
          tokens={[
            {
              name: "primary",
              description: "Brand primary",
              previewStyle: { backgroundColor: "var(--mui-palette-primary-main)" },
            },
            {
              name: "background.paper",
              description: "Card background",
              previewStyle: { backgroundColor: "var(--mui-palette-background-paper)" },
            },
            {
              name: "background.default",
              description: "Page background",
              previewStyle: { backgroundColor: "var(--mui-palette-background-default)" },
            },
          ]}
        />
        <Card variant="outlined">
          <CardContent>
            <Stack spacing={2}>
              <Typography sx={{ fontWeight: 500 }}>Button variants</Typography>
              <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="text">Text</Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </DocsPage>
  ),
};
