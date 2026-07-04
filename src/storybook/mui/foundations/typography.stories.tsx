import type { Meta, StoryObj } from "@storybook/react-vite";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { DocsPage } from "../shared/docs-page";

const meta = {
  title: "MUI/Foundations/Typography",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Roboto type scale via MUI Typography variants.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Scale: Story = {
  render: () => (
    <DocsPage
      title="Typography"
      description="Heading and body variants from the default Material theme."
    >
      <Stack spacing={2}>
        <Typography variant="h1">Heading h1</Typography>
        <Typography variant="h2">Heading h2</Typography>
        <Typography variant="h3">Heading h3</Typography>
        <Typography variant="h4">Heading h4</Typography>
        <Typography variant="h5">Heading h5</Typography>
        <Typography variant="h6">Heading h6</Typography>
      </Stack>
      <Stack spacing={1.5}>
        <Typography variant="subtitle1">Subtitle 1 — section labels</Typography>
        <Typography variant="subtitle2">Subtitle 2 — compact labels</Typography>
        <Typography variant="body1">Body 1 — primary reading text.</Typography>
        <Typography variant="body2" color="text.secondary">
          Body 2 — secondary copy and metadata.
        </Typography>
        <Typography variant="caption" color="text.disabled">
          Caption — fine print
        </Typography>
        <Typography variant="overline">Overline</Typography>
      </Stack>
    </DocsPage>
  ),
};
