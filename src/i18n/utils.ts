import { defaultLang, ui } from "./ui";

export function getLangFromUrl(url: URL) {
  const lang = url.searchParams.get("lang");
  if (lang && lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslation(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}