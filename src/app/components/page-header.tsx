"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export type PageHeaderProps = {
  /** Primary page title. */
  title: string;
  /** Supporting copy shown under the title. */
  description: string;
};

/** Page intro: title plus secondary description. */
export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <Stack spacing={1}>
      <Typography variant="h4" component="h1">
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
    </Stack>
  );
}
