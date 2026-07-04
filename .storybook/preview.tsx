import type { Preview } from "@storybook/react-vite";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { themes } from "storybook/theming";

import "../src/app/load-fonts";
import "../src/app/storybook-styles";

import { MuiEmotionShell } from "../src/app/mui-emotion-shell";
import { darkTheme, lightTheme } from "../src/app/theme";

document.documentElement.classList.add("bg-background");
document.body.classList.add("min-h-screen", "bg-background", "text-primary");

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
      theme: themes.dark,
    },
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MuiEmotionShell>
        <Story />
      </MuiEmotionShell>
    ),
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
};

export default preview;
