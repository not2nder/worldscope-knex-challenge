import { Link } from "react-router-dom";
import appLogo from "../assets/appLogo.svg";
import appLogoDark from "../assets/appLogoDark.svg";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img
              src={appLogo}
              alt="WorldScope Logo"
              className="h-9 w-auto dark:hidden"
            />

            <img
              src={appLogoDark}
              alt="WorldScope Logo"
              className="hidden h-9 w-auto dark:block"
            />
          </div>
        </Link>

        <ThemeToggle />
      </div>
    </header>
  );
}
