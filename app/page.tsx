import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactCTA } from "@/components/ContactCTA";
import { IconCard } from "@/components/IconCard";
import { MaterialComparison } from "@/components/MaterialComparison";
import { SectionHeading } from "@/components/SectionHeading";
import { capabilities, industries, materials, site, whyAkmin } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Industrial Minerals for Ceramic Innovation",
  "Akmin Industrial Minerals supplies feldspar and quartz while supporting ceramic formulations, enrichment work and R&D for industrial clients."
);

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-74px)] overflow-hidden bg-ink text-white">
        <Image
          src="/images/akmin-quarry-rocks.webp"
          alt="Akmin feldspar and quartz material at a quarry site"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/34" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/22" aria-hidden="true" />
        <div className="absolute inset-0 bg-mineral-grid bg-[size:38px_38px] opacity-[0.08] mix-blend-screen" aria-hidden="true" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-teal/18 to-transparent" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[calc(100vh-74px)] max-w-7xl items-center px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="reveal text-sm font-bold uppercase tracking-[0.2em] text-sand">Akmin Industrial Minerals</p>
            <h1 className="reveal reveal-delay-1 mt-5 text-5xl font-semibold leading-[1.02] md:text-7xl">
              Industrial Minerals for Ceramic Innovation
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
              Supplying feldspar and quartz raw materials while helping manufacturers develop better ceramic formulations through technical expertise and R&D.
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/materials">Explore Our Materials</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mineral px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Materials Overview"
              title="Feldspar and quartz with ceramic-sector intelligence."
              text="Akmin works at the intersection of mineral supply, ceramic formulation and processing knowledge. Our role is to help clients understand how raw materials behave, not simply deliver them."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {materials.map((material) => {
                const image =
                  material.slug === "feldspar"
                    ? "/images/akmin-processing-pile.webp"
                    : "/images/akmin-quarry-rocks.webp";
                return (
                  <article key={material.name} className="relative min-h-72 overflow-hidden rounded-sm border border-ink/10 bg-white p-7 shadow-sm">
                    <Image
                      src={image}
                      alt={`${material.name} material at Akmin operations`}
                      fill
                      sizes="(min-width: 768px) 320px, 100vw"
                      className="object-cover opacity-20 grayscale-[20%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-white/94 to-white/72" aria-hidden="true" />
                    <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-teal/12 blur-3xl" aria-hidden="true" />
                    <div className="relative flex min-h-56 flex-col justify-end">
                      <h2 className="text-2xl font-semibold text-ink">{material.name}</h2>
                      <p className="mt-4 text-sm leading-7 text-stone">{material.overview}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Do"
            title="Supply, technical support and applied development."
            text="Akmin combines practical mineral experience with a technical understanding of ceramic manufacturing requirements."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <IconCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mineral px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why Akmin"
              title="Decades in Turkish feldspar, focused on the needs of modern manufacturers."
              text={site.tagline}
            />
            <div className="mt-8 grid gap-4">
              {whyAkmin.map((item) => (
                <p key={item} className="flex gap-3 text-sm leading-7 text-stone">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
          <MaterialComparison />
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Featured Industries"
            title="Mineral knowledge for ceramic and industrial applications."
            text="Akmin supports clients where mineral chemistry, consistency and application performance matter."
            align="center"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry} className="rounded-sm border border-ink/10 bg-mineral p-5 text-center font-semibold text-ink">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
