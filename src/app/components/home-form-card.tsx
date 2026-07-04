"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { HomeForm } from "@/app/components/home-form";

/** Card wrapper for the home page form demo. */
export function HomeFormCard() {
  return (
    <Card className="max-w-md" variant="outlined">
      <CardContent>
        <HomeForm />
      </CardContent>
    </Card>
  );
}
