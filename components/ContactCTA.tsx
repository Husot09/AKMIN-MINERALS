import { ButtonLink } from "./ButtonLink";

export function ContactCTA() {
  return (
    <section className="bg-mineral px-5 py-16 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-sm bg-ink p-8 text-white md:flex-row md:items-center md:justify-between lg:p-10">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sand">Technical Inquiry</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight">Need feldspar, quartz or ceramic formulation support?</h2>
          <p className="mt-4 text-sm leading-7 text-white/72">
            Share your material target, production context or R&D question. Akmin can help frame the next practical step.
          </p>
        </div>
        <ButtonLink href="/contact" variant="secondary">
          Contact Akmin
        </ButtonLink>
      </div>
    </section>
  );
}
