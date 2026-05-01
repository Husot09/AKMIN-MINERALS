import type { Metadata } from "next";
import { site } from "./content";

export function createMetadata(title: string, description: string, path = ""): Metadata {
  const fullTitle = title === site.name ? title : `${title} | ${site.name}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: `${site.url}${path}`
    },
    openGraph: {
      title: fullTitle,
      description,
      url: `${site.url}${path}`,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/images/akmin-mineral-hero.png",
          width: 1200,
          height: 675,
          alt: "Abstract feldspar and quartz mineral texture for Akmin Industrial Minerals"
        }
      ]
    }
  };
}
