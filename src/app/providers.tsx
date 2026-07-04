"use client";

import "@/app/load-fonts";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import { MuiEmotionShell } from "@/app/mui-emotion-shell";
import { theme } from "@/app/theme";

/** MUI theme + Emotion cache. Tailwind handles page layout via styles.css layers. */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MuiEmotionShell>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </MuiEmotionShell>
  );
}
