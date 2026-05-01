import { ContactCTA } from "@/components/ContactCTA";
import { IconCard } from "@/components/IconCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ceramicSolutions, pageIntro } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Ceramic Solutions",
  "Akmin supports ceramic body formulation, glaze and tile applications, raw material selection, performance optimization and technical testing.",
  "/ceramic-solutions"
);

export default function CeramicSolutionsPage() {
  return (
    <>
      <PageHero {...pageIntro.ceramic} />
      <section className="bg-mineral px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Technical Services"
            title="Better ceramic recipes begin with better raw material decisions."
            text="Akmin helps clients understand how feldspar, quartz and related mineral choices affect body behavior, surface quality, firing response and production consistency."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ceramicSolutions.map((item) => (
              <IconCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="How We Work"
            title="A practical development path for manufacturers."
            text="Every ceramic system has different production constraints. Akmin's support is designed to be specific, technical and grounded in the client's actual material and process context."
          />
          <div className="space-y-5">
            {[
              ["1", "Understand the recipe target, product category and production constraints."],
              ["2", "Review feldspar, quartz and complementary raw material options."],
              ["3", "Identify likely formulation adjustments and testing priorities."],
              ["4", "Support development work with mineral behavior insight and practical recommendations."]
            ].map(([step, text]) => (
              <div key={step} className="grid grid-cols-[3rem_1fr] gap-4 rounded-sm border border-ink/10 bg-mineral p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-teal text-sm font-bold text-white">{step}</span>
                <p className="self-center text-sm leading-7 text-stone">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
