import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";

import { MuiShowcase } from "./mui-showcase";

const meta = {
  title: "Vibework/Components/MuiShowcase",
  component: MuiShowcase,
  tags: ["autodocs", "test"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof MuiShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByRole("button", { name: "Primary" })).toBeVisible();
    await expect(canvas.getByRole("button", { name: "Rounded" })).toBeVisible();
    await expect(canvas.getByRole("button", { name: "Secondary" })).toBeVisible();
  },
};
