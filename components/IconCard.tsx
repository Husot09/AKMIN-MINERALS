import type { LucideIcon } from "lucide-react";

type IconCardProps = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export function IconCard({ title, text, icon: Icon }: IconCardProps) {
  return (
    <article className="group rounded-sm border border-ink/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-mist text-teal transition group-hover:bg-teal group-hover:text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-stone">{text}</p>
    </article>
  );
}
