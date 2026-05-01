import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const styles = {
    primary: "bg-teal text-white hover:bg-ink focus-visible:outline-teal",
    secondary: "border border-white/35 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white",
    dark: "border border-ink/15 bg-white text-ink hover:border-teal hover:text-teal focus-visible:outline-teal"
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
