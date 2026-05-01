import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navItems, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink text-mineral">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-mineral text-sm font-bold tracking-[0.12em] text-ink">
              AK
            </span>
            <div>
              <p className="font-bold uppercase tracking-[0.16em]">Akmin</p>
              <p className="text-sm text-mineral/70">Industrial Minerals</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-mineral/72">{site.tagline}</p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-sand">Navigation</h2>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-mineral/72 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-sand">Contact</h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-mineral/72">
            <p className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
              <span>{site.address}</span>
            </p>
            <p className="flex gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
              <span>
                {site.phone}
                <br />
                Fax: {site.fax}
              </span>
            </p>
            <p className="flex gap-3">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="transition hover:text-white">
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5">
        <p className="mx-auto max-w-7xl text-xs text-mineral/55 lg:px-8">
          © {new Date().getFullYear()} {site.name}. Industrial mineral expertise for ceramic and technical applications.
        </p>
      </div>
    </footer>
  );
}
