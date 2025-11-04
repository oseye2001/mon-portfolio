// src/lib/lang.ts
export type Lang = "fr" | "en";
const KEY = "lang";
const EVENT = "app:language-changed";

export function getLang(): Lang {
  if (typeof window === "undefined") return "fr";
  const saved = localStorage.getItem(KEY);
  return saved === "en" ? "en" : "fr";
}

export function setLang(l: Lang) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, l);
  document.documentElement.lang = l;
  window.dispatchEvent(new CustomEvent(EVENT, { detail: { lang: l } }));
}

export function onLangChange(cb: (l: Lang) => void) {
  const handler = (e: Event) => {
    const d = (e as CustomEvent).detail?.lang as Lang | undefined;
    if (d) cb(d);
  };
  window.addEventListener(EVENT, handler as EventListener);
  return () => window.removeEventListener(EVENT, handler as EventListener);
}
