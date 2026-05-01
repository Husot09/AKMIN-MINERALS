import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { pageIntro } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Contact",
  "Contact Akmin Industrial Minerals for feldspar, quartz, ceramic recipe support, R&D inquiries and industrial mineral requirements.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <PageHero {...pageIntro.contact} cta={false} />
      <section className="bg-mineral px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
