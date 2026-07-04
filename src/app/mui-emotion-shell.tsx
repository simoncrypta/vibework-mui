"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import GlobalStyles from "@mui/material/GlobalStyles";
import { StyledEngineProvider } from "@mui/material/styles";

const cache = createCache({ key: "mui", prepend: true });

/** Emotion cache + CSS layers for MUI + Tailwind. ThemeProvider lives outside (app or Storybook addon). */
export function MuiEmotionShell({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={cache}>
      <StyledEngineProvider enableCssLayer>
        <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
        {children}
      </StyledEngineProvider>
    </CacheProvider>
  );
}
