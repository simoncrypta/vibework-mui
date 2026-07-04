"use client";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";

/** Client island: controlled MUI inputs need React state. */
export function HomeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Stack spacing={2}>
      <TextField
        label="Name"
        placeholder="Ada Lovelace"
        value={name}
        onChange={(event) => setName(event.target.value)}
        fullWidth
      />
      <TextField
        label="Email"
        placeholder="ada@example.com"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        onClick={() => {
          // Demo only — wire to a server function when you need real submit.
        }}
      >
        Submit
      </Button>
    </Stack>
  );
}
