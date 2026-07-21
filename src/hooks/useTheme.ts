import { useEffect, useState } from "react";
import type { Theme } from "../types/theme";
import { applyTheme, getStoredTheme, getNextTheme } from "../utils/applyTheme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getStoredTheme);

  useEffect(() => {
    localStorage.setItem("scheme", theme);
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function handleSystemThemeChange() {
      if (theme === "system") {
        applyTheme("system");
      }
    }

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => getNextTheme(currentTheme));
  }

  return {
    theme,
    setTheme,
    toggleTheme,
  };
}
