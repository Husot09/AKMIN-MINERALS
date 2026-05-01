"use client";

import { useEffect } from "react";
import { translations } from "@/lib/translations";

const originalText = new WeakMap<Text, string>();
const skipTags = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA"]);

function currentLanguage() {
  return document.documentElement.dataset.lang === "tr" ? "tr" : "en";
}

function translateNode(node: Text, lang: "en" | "tr") {
  if (!node.parentElement || skipTags.has(node.parentElement.tagName)) {
    return;
  }

  if (!originalText.has(node)) {
    originalText.set(node, node.nodeValue ?? "");
  }

  const original = originalText.get(node) ?? "";
  const trimmed = original.trim();
  if (!trimmed) {
    return;
  }

  const translated = lang === "tr" ? translations[trimmed] : undefined;
  const replacement = translated ?? trimmed;
  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";
  node.nodeValue = `${leading}${replacement}${trailing}`;
}

function translateDocument(lang: "en" | "tr") {
  document.documentElement.lang = lang === "tr" ? "tr" : "en";
  document.documentElement.dataset.lang = lang;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode as Text);
  }
  nodes.forEach((node) => translateNode(node, lang));
}

export function LanguageController() {
  useEffect(() => {
    const saved = localStorage.getItem("akmin-language");
    const initial = saved === "tr" ? "tr" : "en";
    translateDocument(initial);

    const handleLanguageChange = (event: Event) => {
      const detail = (event as CustomEvent<{ lang: "en" | "tr" }>).detail;
      translateDocument(detail?.lang === "tr" ? "tr" : "en");
    };

    const observer = new MutationObserver(() => translateDocument(currentLanguage()));
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("akmin-language-change", handleLanguageChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("akmin-language-change", handleLanguageChange);
    };
  }, []);

  return null;
}
