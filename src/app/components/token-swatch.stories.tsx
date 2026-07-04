import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";

import { TokenSwatch } from "./token-swatch";

const meta = {
  title: "Vibework/Components/TokenSwatch",
  component: TokenSwatch,
  tags: ["autodocs", "test"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
  args: {
    token: "bg-background-paper",
    description: "Cards, panels",
    className: "bg-background-paper",
  },
} satisfies Meta<typeof TokenSwatch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Surface: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("bg-background-paper")).toBeVisible();
    await expect(canvas.getByText("Cards, panels")).toBeVisible();
  },
};

export const Body: Story = {
  args: {
    token: "bg-background",
    description: "Page background",
    className: "bg-background",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("bg-background")).toBeVisible();
    await expect(canvas.getByText("Page background")).toBeVisible();
  },
};

export const Muted: Story = {
  args: {
    token: "bg-muted",
    description: "Subtle emphasis",
    className: "bg-muted",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("bg-muted")).toBeVisible();
    await expect(canvas.getByText("Subtle emphasis")).toBeVisible();
  },
};
