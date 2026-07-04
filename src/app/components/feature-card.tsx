"use client";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export type FeatureBadge = {
  label: string;
  variant: "info" | "success" | "neutral" | "warning" | "error";
};

const chipColor: Record<
  FeatureBadge["variant"],
  "info" | "success" | "default" | "warning" | "error"
> = {
  info: "info",
  success: "success",
  neutral: "default",
  warning: "warning",
  error: "error",
};

export type FeatureCardProps = {
  /** Badges shown in the card header. */
  badges: FeatureBadge[];
  /** Body copy describing the feature. */
  description: string;
  /** Primary action label. */
  ctaLabel: string;
  /** Optional click handler for the CTA button. */
  onCtaClick?: () => void;
};

/** Card that highlights a feature with badges, copy, and a CTA. */
export function FeatureCard({ badges, description, ctaLabel, onCtaClick }: FeatureCardProps) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
            {badges.map((badge) => (
              <Chip
                key={badge.label}
                label={badge.label}
                color={chipColor[badge.variant]}
                size="small"
              />
            ))}
          </Stack>
          <Typography variant="body1">{description}</Typography>
          <Button variant="contained" onClick={onCtaClick}>
            {ctaLabel}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
