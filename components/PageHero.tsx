import { ButtonLink } from "./ButtonLink";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  cta?: boolean;
};

export function PageHero({ eyebrow, title, text, cta = true }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-mineral-grid bg-[size:34px_34px] opacity-20" aria-hidden="true" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-teal/20 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="reveal text-sm font-bold uppercase tracking-[0.2em] text-sand">{eyebrow}</p>
          <h1 className="reveal reveal-delay-1 mt-5 text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-lg leading-8 text-white/76">{text}</p>
          {cta ? (
            <div className="reveal reveal-delay-3 mt-8">
              <ButtonLink href="/contact" variant="secondary">
                Discuss Your Requirements
              </ButtonLink>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
