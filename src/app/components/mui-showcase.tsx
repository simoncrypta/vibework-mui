"use client";

import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

/** MUI Card + Button demo with Tailwind className overrides. */
export function MuiShowcase() {
  return (
    <Stack spacing={1.5}>
      <Paper className="border-2 border-blue-500 shadow-lg" elevation={1} sx={{ p: 2 }}>
        <Typography variant="body1">
          Card with{" "}
          <Typography
            component="code"
            variant="body2"
            className="rounded bg-muted px-1 py-0.5 text-primary"
          >
            border-2 border-blue-500 shadow-lg
          </Typography>
        </Typography>
      </Paper>
      <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
        <Button variant="contained">Primary</Button>
        <Button variant="contained" className="rounded-full shadow-xl">
          Rounded
        </Button>
        <Button variant="outlined">Secondary</Button>
      </Stack>
    </Stack>
  );
}
