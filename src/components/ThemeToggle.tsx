import { MonitorCog, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const Icon = {
    light: Sun,
    dark: Moon,
    system: MonitorCog,
  }[theme];

  const label = {
    light: "Light theme",
    dark: "Dark theme",
    system: "System theme",
  }[theme];

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none  focus:ring-cyan-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
    >
      <Icon size={18} />

      <span className="hidden sm:inline">
        {theme === "light" && "Light"}
        {theme === "dark" && "Dark"}
        {theme === "system" && "System"}
      </span>
    </button>
  );
}
