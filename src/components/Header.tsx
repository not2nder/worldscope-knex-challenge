import { Link } from "react-router-dom";
import appLogo from "../assets/appLogo.svg";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-300/70 bg-white/80 backdrop-blur-xl shadow-xl shadow-slate-300/10">
      <div className="mx-auto py-8 flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={appLogo} alt="WorldScope Logo" className="w-42" />
          </div>
        </Link>
      </div>
    </header>
  );
}
