import Link from "next/link";

const footerGroups = [
  {
    title: "HackIndia",
    links: [
      { label: "About", href: "/about" },
      { label: "HackIndia Challenges", href: "/hackindia" },
    ],
  },
  {
    title: "Discover",
    links: [
      { label: "Hackathons", href: "/hackathons" },
      { label: "Problems", href: "/problems" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resources", href: "/resources" },
      { label: "Datasets", href: "/resources/datasets" },
      { label: "APIs", href: "/resources/apis" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "Research & Guides", href: "/guides" },
      { label: "Technology", href: "/guides/technology" },
      { label: "Winning Strategies", href: "/guides/winning-strategies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-slate-950">
                HI
              </span>
              <span className="text-xl font-semibold tracking-[-0.06em] text-white">
                HackIndia
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
              Discover hackathons, explore problems, understand the challenge, and build with better context.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-400">
          © 2026 HackIndia. Built for the next generation of builders.
        </div>
      </div>
    </footer>
  );
}
