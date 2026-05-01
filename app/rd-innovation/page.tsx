import { CheckCircle2 } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { innovationFocus, pageIntro } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "R&D and Innovation",
  "Akmin researches new uses for feldspar and quartz, improves enrichment methods, explores sustainable processing and supports new industrial applications.",
  "/rd-innovation"
);

export default function InnovationPage() {
  return (
    <>
      <PageHero {...pageIntro.innovation} />
      <section className="bg-mineral px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Applied Research"
            title="Turning mineral knowledge into practical industrial value."
            text="Akmin's R&D focus is built around feldspar and quartz: how they are processed, how they behave in ceramic systems and where they can support new industrial applications."
          />
          <div className="grid gap-4">
            {innovationFocus.map((item) => (
              <p key={item} className="flex gap-3 rounded-sm bg-white p-5 text-sm leading-7 text-stone shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Innovation Areas"
            title="Focused development, not vague experimentation."
            text="Our work stays close to material science, ceramic production and mineral processing realities."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Enrichment Methods", "Evaluating processing and flotation approaches that can improve mineral value for target applications."],
              ["Sustainable Processing", "Looking for smarter resource use, reduced avoidable waste and better fit between raw material and end application."],
              ["New Applications", "Exploring how feldspar and quartz can support emerging ceramic, glass and industrial mineral requirements."]
            ].map(([title, text]) => (
              <article key={title} className="rounded-sm border border-ink/10 bg-mineral p-6">
                <h2 className="text-xl font-semibold text-ink">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-stone">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
