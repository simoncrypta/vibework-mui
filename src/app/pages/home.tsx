import { FeatureCard } from "@/app/components/feature-card";
import { HomeFormCard } from "@/app/components/home-form-card";
import { MuiShowcase } from "@/app/components/mui-showcase";
import { PageHeader } from "@/app/components/page-header";
import { StatusPill } from "@/app/components/status-pill";
import { TokenSwatch } from "@/app/components/token-swatch";

/**
 * Server Component page: MUI for components, Tailwind for layout/wrappers.
 * Interactive bits live in small client islands (see home-form.tsx).
 */
export const Home = () => {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <PageHeader
          title="Vibework + MUI"
          description="RedwoodSDK RSC on Cloudflare Workers. MUI for components; Tailwind handles layout and token-backed utilities via the design-system bridge."
        />

        <hr className="border-0 border-t border-divider" />

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-medium">Tailwind on MUI components</h2>
          <MuiShowcase />
        </section>

        <hr className="border-0 border-t border-divider" />

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-medium">Token-backed utilities</h2>
          <p className="text-text-secondary">
            Classes like <code className="text-sm">bg-background-paper</code> and{" "}
            <code className="text-sm">text-primary</code> resolve to MUI CSS variables.
          </p>
          <div className="grid grid-cols-3 gap-3">
            <TokenSwatch
              token="bg-background-paper"
              description="Cards, panels"
              className="bg-background-paper"
            />
            <TokenSwatch
              token="bg-background"
              description="Page background"
              className="bg-background"
            />
            <TokenSwatch token="bg-muted" description="Subtle emphasis" className="bg-muted" />
          </div>
          <div className="flex gap-3">
            <StatusPill status="success" label="Success" />
            <StatusPill status="error" label="Error" />
            <StatusPill status="warning" label="Warning" />
          </div>
        </section>

        <hr className="border-0 border-t border-divider" />

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-medium">Compose with layout components</h2>
          <FeatureCard
            badges={[
              { label: "RSC", variant: "info" },
              { label: "Tailwind", variant: "success" },
              { label: "MUI", variant: "neutral" },
            ]}
            description="Prefer MUI layout primitives (Stack, Card, Paper) for structure; use Tailwind on wrappers and className overrides."
            ctaLabel="Get started"
          />
        </section>

        <hr className="border-0 border-t border-divider" />

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-medium">Client island (forms)</h2>
          <p className="text-text-secondary">
            Controlled inputs stay in a small client component so the page shell remains a Server
            Component.
          </p>
          <HomeFormCard />
        </section>
      </div>
    </main>
  );
};
