import type { Theme } from "../types/theme";

export function isValidTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark" || value === "system";
}

export function getStoredTheme(): Theme {
  const storedTheme = localStorage.getItem("scheme");

  if (isValidTheme(storedTheme)) {
    return storedTheme;
  }

  return "system";
}

export function getNextTheme(theme: Theme): Theme {
  if (theme === "light") return "dark";
  if (theme === "dark") return "system";

  return "light";
}

export function systemPrefersDark(): boolean {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;

  const shouldUseDarkTheme =
    theme === "dark" || (theme === "system" && systemPrefersDark());

  root.classList.toggle("dark", shouldUseDarkTheme);
}
