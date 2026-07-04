"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

type DocsPageProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

/** Layout shell for Foundations and Patterns stories. */
export function DocsPage({ title, description, children }: DocsPageProps) {
  return (
    <div className="bg-background p-8">
      <Stack spacing={4}>
        <Stack spacing={1}>
          <Typography variant="h4" component="h1">
            {title}
          </Typography>
          {description ? (
            <Typography variant="body1" color="text.secondary">
              {description}
            </Typography>
          ) : null}
        </Stack>
        {children}
      </Stack>
    </div>
  );
}
