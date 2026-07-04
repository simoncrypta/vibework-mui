"use client";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { CSSProperties } from "react";

export type TokenEntry = {
  name: string;
  description?: string;
  previewStyle?: CSSProperties;
  className?: string;
};

type TokenGridProps = {
  title?: string;
  tokens: TokenEntry[];
  columns?: 2 | 3 | 4;
  variant?: "swatch" | "bar" | "box";
};

function TokenPreview({
  token,
  variant,
}: {
  token: TokenEntry;
  variant: TokenGridProps["variant"];
}) {
  if (variant === "bar") {
    return (
      <div
        className="h-4 rounded bg-primary"
        style={{
          width: token.previewStyle?.width ?? 32,
          ...token.previewStyle,
        }}
      />
    );
  }

  if (variant === "box") {
    return (
      <div
        className={token.className ?? "border border-divider bg-background-paper"}
        style={{
          width: 80,
          height: 80,
          borderRadius: token.previewStyle?.borderRadius,
          boxShadow: token.previewStyle?.boxShadow,
          ...token.previewStyle,
        }}
      />
    );
  }

  return (
    <div
      className={`h-16 rounded border border-divider ${token.className ?? "bg-background-paper"}`}
      style={token.previewStyle}
    />
  );
}

/** Grid of design-token previews for Foundations stories. */
export function TokenGrid({ title, tokens, columns = 3, variant = "swatch" }: TokenGridProps) {
  const colSize = columns === 2 ? 6 : columns === 4 ? 3 : 4;

  return (
    <Stack spacing={2}>
      {title ? (
        <Typography variant="h6" component="h3">
          {title}
        </Typography>
      ) : null}
      <Grid container spacing={2}>
        {tokens.map((token) => (
          <Grid key={token.name} size={{ xs: 12, sm: colSize }}>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Stack spacing={1}>
                <TokenPreview token={token} variant={variant} />
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {token.name}
                </Typography>
                {token.description ? (
                  <Typography variant="caption" color="text.secondary">
                    {token.description}
                  </Typography>
                ) : null}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
