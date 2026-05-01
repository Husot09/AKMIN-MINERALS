"use client";

import { useState } from "react";

type Language = "en" | "tr";

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }
    return localStorage.getItem("akmin-language") === "tr" ? "tr" : "en";
  });

  function chooseLanguage(next: Language) {
    setLanguage(next);
    localStorage.setItem("akmin-language", next);
    window.dispatchEvent(new CustomEvent("akmin-language-change", { detail: { lang: next } }));
  }

  return (
    <div
      className={`inline-flex items-center rounded-sm border border-ink/15 bg-white p-1 text-xs font-bold shadow-sm ${
        compact ? "w-full justify-between" : ""
      }`}
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => chooseLanguage("en")}
        className={`rounded-sm px-2.5 py-1.5 transition ${
          language === "en" ? "bg-ink text-white" : "text-stone hover:bg-mineral hover:text-ink"
        }`}
        aria-pressed={language === "en"}
      >
        🇬🇧 EN
      </button>
      <button
        type="button"
        onClick={() => chooseLanguage("tr")}
        className={`rounded-sm px-2.5 py-1.5 transition ${
          language === "tr" ? "bg-teal text-white" : "text-stone hover:bg-mineral hover:text-ink"
        }`}
        aria-pressed={language === "tr"}
      >
        🇹🇷 TR
      </button>
    </div>
  );
}
