import { CheckCircle2 } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { pageIntro } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "About Akmin",
  "Learn about Akmin Industrial Minerals, a Turkish feldspar and quartz company with experience in production, export, enrichment and ceramic raw materials.",
  "/about"
);

const timeline = [
  {
    year: "Early 1980s",
    title: "Roots in Turkish feldspar",
    text: "Akmin's background reaches into the formative decades of Turkey's feldspar ecosystem, building practical knowledge around deposits, processing and ceramic raw materials."
  },
  {
    year: "2001-2006",
    title: "Major production and export period",
    text: "Akmin operated as one of Turkey's largest feldspar producers and exporters, serving industrial markets with meaningful scale and operational experience."
  },
  {
    year: "Today",
    title: "Technical mineral solutions",
    text: "The company now focuses on feldspar, quartz, enrichment knowledge, ceramic recipe support and R&D for new industrial applications."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero {...pageIntro.about} />
      <section className="bg-mineral px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Company Profile"
            title="Practical mineral experience, shaped by ceramic industry needs."
            text="Akmin Industrial Minerals is a Turkish company working mainly with feldspar and quartz. Our history includes mine-site investments, feldspar enrichment, flotation techniques, ceramic raw materials and export-oriented production."
          />
          <div className="space-y-6 text-base leading-8 text-stone">
            <p>
              Akmin is not positioned as a generic mining brand. The company brings a technical perspective to raw material supply, especially for ceramic manufacturers that need consistency, formulation logic and a clear understanding of mineral behavior.
            </p>
            <p>
              Our background in Turkish feldspar gives us a strong base for working with industrial buyers, technical managers and R&D teams. We help clients evaluate material options, improve recipes and explore applications where feldspar and quartz can create measurable value.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="History" title="A long connection to feldspar production and technical development." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {timeline.map((item) => (
              <article key={item.year} className="rounded-sm border border-ink/10 bg-mineral p-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">{item.year}</p>
                <h2 className="mt-4 text-xl font-semibold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-stone">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mineral px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Current Focus"
            title="From mineral supply to applied ceramic problem solving."
            text="Akmin's current work emphasizes technically grounded conversations with manufacturers and industrial partners."
          />
          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {[
              "Feldspar and quartz supply for ceramic and industrial clients.",
              "Recipe development support for ceramic bodies, tiles, glazes and related systems.",
              "Mineral processing insight, including enrichment and flotation considerations.",
              "Applied R&D for new uses, improved formulations and sustainable material value."
            ].map((item) => (
              <p key={item} className="flex gap-3 rounded-sm bg-white p-5 text-sm leading-7 text-stone">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
