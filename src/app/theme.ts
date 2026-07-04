"use client";

import { createTheme } from "@mui/material/styles";

const baseTheme = {
  typography: {
    fontFamily: "Roboto, system-ui, sans-serif",
  },
};

export const lightTheme = createTheme({
  ...baseTheme,
  cssVariables: true,
});

export const darkTheme = createTheme({
  ...baseTheme,
  cssVariables: true,
  palette: {
    mode: "dark",
  },
});

/** Default app theme (light). */
export const theme = lightTheme;
