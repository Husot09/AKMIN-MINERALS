import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageController } from "@/components/LanguageController";
import { site } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Industrial Minerals for Ceramic Innovation`,
    template: `%s | ${site.name}`
  },
  description: site.description
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var l=localStorage.getItem('akmin-language')==='tr'?'tr':'en';document.documentElement.dataset.lang=l;document.documentElement.lang=l;}catch(e){}"
          }}
        />
        <Header />
        <LanguageController />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
