import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
}) {
  const variantClasses = {
    primary:
      "bg-[#0f172a] text-white shadow-sm hover:bg-[#111827] focus-visible:ring-[#2563eb]",
    secondary:
      "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 focus-visible:ring-[#2563eb]",
    ghost:
      "text-slate-700 hover:bg-slate-100 hover:text-slate-950 focus-visible:ring-[#2563eb]",
  };

  return (
    <button
      className={[
        "inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
        variantClasses[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
