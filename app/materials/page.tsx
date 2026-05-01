import Image from "next/image";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHero } from "@/components/PageHero";
import { materials, pageIntro } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Feldspar and Quartz Materials",
  "Explore Akmin's feldspar and quartz materials for ceramic bodies, glazes, tiles, sanitaryware, glass and industrial formulations.",
  "/materials"
);

export default function MaterialsPage() {
  return (
    <>
      <PageHero {...pageIntro.materials} />
      <section className="bg-mineral px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-10">
          {materials.map((material) => {
            const image =
              material.slug === "feldspar"
                ? "/images/akmin-processing-pile.webp"
                : "/images/akmin-quarry-rocks.webp";
            return (
              <article key={material.slug} id={material.slug} className="relative overflow-hidden rounded-sm border border-ink/10 bg-white p-6 shadow-sm md:p-8">
                <Image
                  src={image}
                  alt={`${material.name} material from Akmin operations`}
                  fill
                  sizes="100vw"
                  className="object-cover opacity-[0.12] grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/96 to-white/82" aria-hidden="true" />
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                  <div className="relative">
                    <h2 className="text-3xl font-semibold text-ink">{material.name}</h2>
                    <p className="mt-5 text-base leading-8 text-stone">{material.overview}</p>
                  </div>
                  <div className="relative grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-teal">Industrial uses</h3>
                      <ul className="mt-4 space-y-3 text-sm leading-7 text-stone">
                        {material.uses.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-teal">Key properties</h3>
                      <ul className="mt-4 space-y-3 text-sm leading-7 text-stone">
                        {material.properties.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-teal">Ceramic applications</h3>
                      <p className="mt-4 text-sm leading-7 text-stone">{material.applications}</p>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-teal">Akmin support</h3>
                      <p className="mt-4 text-sm leading-7 text-stone">{material.support}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
