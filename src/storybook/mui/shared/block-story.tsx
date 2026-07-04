import type { ReactNode } from "react";

type BlockStoryProps = {
  children: ReactNode;
  /** Use padded canvas for compact blocks; fullscreen for page-style demos. */
  padded?: boolean;
};

/** Standard wrapper for MUI component demos in Storybook. */
export function BlockStory({ children, padded = true }: BlockStoryProps) {
  if (!padded) {
    return <>{children}</>;
  }

  return <div className="min-h-[120px] p-6">{children}</div>;
}
