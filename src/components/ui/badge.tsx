import type { ReactNode } from "react";

export function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border border-[#a5b4fc]/60 bg-[#eef2ff] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#312e81]",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
