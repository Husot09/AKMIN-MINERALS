import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/content";

const inputClass =
  "min-h-12 rounded-sm border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-stone/70 focus:border-teal focus:ring-4 focus:ring-teal/12";

export function ContactForm() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
      <aside className="rounded-sm bg-ink p-7 text-white">
        <h2 className="text-2xl font-semibold">Akmin Industrial Minerals</h2>
        <div className="mt-6 space-y-5 text-sm leading-7 text-white/74">
          <p className="flex gap-3">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-sand" aria-hidden="true" />
            <span>{site.address}</span>
          </p>
          <p className="flex gap-3">
            <Phone className="mt-1 h-4 w-4 shrink-0 text-sand" aria-hidden="true" />
            <span>
              {site.phone}
              <br />
              Fax: {site.fax}
            </span>
          </p>
          <p className="flex gap-3">
            <Mail className="mt-1 h-4 w-4 shrink-0 text-sand" aria-hidden="true" />
            <a href={`mailto:${site.email}`} className="transition hover:text-white">
              {site.email}
            </a>
          </p>
        </div>
      </aside>

      <form className="rounded-sm border border-ink/10 bg-white p-6 shadow-sm md:p-8">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Name
            <input className={inputClass} name="name" type="text" autoComplete="name" required />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Company
            <input className={inputClass} name="company" type="text" autoComplete="organization" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Email
            <input className={inputClass} name="email" type="email" autoComplete="email" required />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Phone
            <input className={inputClass} name="phone" type="tel" autoComplete="tel" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-ink md:col-span-2">
            Area of interest
            <select className={inputClass} name="interest" defaultValue="Feldspar">
              <option>Feldspar</option>
              <option>Quartz</option>
              <option>Ceramic Recipes</option>
              <option>R&D</option>
              <option>Other</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-ink md:col-span-2">
            Message
            <textarea className={`${inputClass} min-h-36 resize-y`} name="message" required />
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-sm bg-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
        >
          Send Inquiry
        </button>
        <p className="mt-4 text-xs leading-6 text-stone">
          This static form is ready to connect to your preferred email or CRM service.
        </p>
      </form>
    </div>
  );
}
