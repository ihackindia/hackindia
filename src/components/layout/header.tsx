import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Discover Hackathons", href: "/hackathons" },
  { label: "Explore Problems", href: "/problems" },
  { label: "Resources", href: "/resources" },
  { label: "Research & Guides", href: "/guides" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-3" aria-label="HackIndia home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0f172a] text-sm font-bold text-white">
            HI
          </span>
          <span className="text-lg font-semibold tracking-[-0.05em] text-slate-950">
            HackIndia
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="secondary" className="rounded-full">
            Start Exploring
          </Button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              d="M4 7H20M4 12H20M4 17H20"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div className="border-t border-slate-200 bg-white md:hidden">
        <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="primary" className="mt-2 rounded-full">
              Start Exploring
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
