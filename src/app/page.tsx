import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const featureCards = [
  {
    title: "Discover Hackathons",
    description:
      "Browse upcoming, ongoing, and relevant events across government, national, college, corporate, and online ecosystems.",
  },
  {
    title: "Explore Problems",
    description:
      "Open structured problem pages that clearly separate official statements, HackIndia research, and practical guidance.",
  },
  {
    title: "Use Resources",
    description:
      "Find datasets, APIs, research papers, tutorials, and tools that can help accelerate research and building.",
  },
  {
    title: "Read Guides",
    description:
      "Dive into technology, hackathon, winning strategy, and project-building guides that support the full journey.",
  },
];

const platformPillars = [
  "Hackathons",
  "Problems",
  "Resources",
  "Research & Guides",
];

const valueSignals = [
  { label: "Discovery", value: "Fast" },
  { label: "Understanding", value: "Clear" },
  { label: "Building", value: "Guided" },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-[#f8fafc]">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Badge>HackIndia MVP shell</Badge>

              <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-[-0.08em] text-slate-950 sm:text-5xl lg:text-6xl">
                Discover. Understand. Build.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
                HackIndia connects hackathons, problems,resources, and research so students can move from discovery to building with clarity.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/hackathons"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f46e5] focus-visible:ring-offset-2"
                >
                  Explore Hackathons
                </Link>
                <Link
                  href="/problems"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f46e5] focus-visible:ring-offset-2"
                >
                  Explore Problems
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {valueSignals.map((signal) => (
                  <div
                    key={signal.label}
                    className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm shadow-slate-200/50"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {signal.label}
                    </div>
                    <div className="mt-2 text-xl font-semibold tracking-[-0.04em] text-slate-950">
                      {signal.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-slate-950 p-6 text-left text-slate-100 shadow-lg shadow-slate-300/60">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">
                    Platform flow
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-white">
                    HackIndia
                  </h2>
                </div>
                <Badge className="border-indigo-400/60 bg-indigo-500/10 text-indigo-200">
                  MVP
                </Badge>
              </div>

              <div className="mt-6 space-y-3">
                {platformPillars.map((pillar, index) => (
                  <div
                    key={pillar}
                    className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/80 p-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-semibold text-indigo-100">
                      {index + 1}
                    </div>
                    <div className="text-sm font-medium text-slate-200">{pillar}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                  Current phase
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  This is the temporary landing shell for the HackIndia design system and application foundation.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <Container className="py-20">
          <SectionHeading
            eyebrow="Why HackIndia"
            title="A cleaner path from hackathon discovery to building"
            description="The MVP focuses on the core journey: discover a relevant opportunity, understand the problem, find supporting resources, and move toward a solid build strategy."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((card) => (
              <Card key={card.title} className="h-full">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-lg text-indigo-700">
                  •
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-950">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-800 bg-[#071a2c]">
        <Container className="py-12 sm:py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300">
                Design system foundation
              </p>
              <h2
                className="mt-4 text-3xl font-semibold tracking-[-0.07em] text-white sm:text-4xl lg:text-[3rem] lg:leading-[1.05]"
                style={{ color: "#ffffff" }}
              >
                Built to scale into hackathons, problems, resources, and guides.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:pl-8">
              {[
                "Responsive typography and spacing",
                "Reusable layout and UI primitives",
                "Accessible navigation and focus states",
                "Clean foundation for future content pages",
              ].map((item) => (
                <Card
                  key={item}
                  className="border border-white/10 bg-white/95 text-slate-900 shadow-none"
                >
                  <p className="text-sm font-medium leading-6 text-slate-700">{item}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50">
        <Container className="py-20">
          <SectionHeading
            eyebrow="Current scope"
            title="This phase intentionally stays focused"
            description="The application shell is being established first so that future pages can reuse the same design system, layout, and navigation patterns without rework."
            align="center"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "No authentication",
              "No database layer",
              "No AI search yet",
            ].map((item) => (
              <Card key={item} className="text-center">
                <p className="text-sm font-medium text-slate-700">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
