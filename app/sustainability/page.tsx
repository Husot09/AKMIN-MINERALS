import { ContactCTA } from "@/components/ContactCTA";
import { IconCard } from "@/components/IconCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { pageIntro, site, sustainabilityPillars } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Sustainability",
  "Akmin approaches industrial minerals through responsible sourcing, efficient processing, long-term resource value and technical optimization.",
  "/sustainability"
);

export default function SustainabilityPage() {
  return (
    <>
      <PageHero {...pageIntro.sustainability} />
      <section className="bg-mineral px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Approach"
            title="Sustainability as a practical technical discipline."
            text={site.tagline}
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {sustainabilityPillars.map((item) => (
              <IconCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Responsible Positioning"
            title="Clear commitments, careful language and measurable thinking."
            text="Akmin avoids exaggerated claims. Our sustainability focus is tied to how minerals are selected, processed, applied and valued over time."
          />
          <div className="space-y-6 text-base leading-8 text-stone">
            <p>
              Responsible mineral work begins with understanding the resource and the application. In ceramics, better raw material selection can help manufacturers reduce wasteful testing, improve consistency and make more informed formulation decisions.
            </p>
            <p>
              Akmin&apos;s processing and enrichment background also supports conversations about efficient resource use. The goal is not to present sustainability as a slogan, but to make technical choices that support environmental care, commercial durability and useful industrial performance.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
