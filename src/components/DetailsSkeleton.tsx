import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import imagePlaceholder from "../assets/imagePlaceholder.svg";

export default function DetailsSkeleton() {
  return (
    <div className="space-y-4">
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
      >
        <ChevronLeft size={18} />
        Back to countries
      </Link>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* left */}
        <div className="rounded-xl space-y-2.5 border border-slate-200 bg-white p-3 shadow-sm">
          <img
            src={imagePlaceholder}
            className="aspect-video w-full rounded-md object-cover object-center animate-pulse"
          />

          <p className="h-5 w-24 rounded-md bg-gray-200 animate-pulse" />

          <div className="flex items-center gap-2">
            <div className="h-7 w-80 bg-gray-200 rounded-md animate-pulse" />
          </div>
        </div>

        {/* right */}
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-wrap gap-2">
            <span className="w-20 h-6 rounded-full bg-gray-200 animate-pulse" />
            <span className="w-32 rounded-full bg-gray-200 animate-pulse" />
          </div>

          <h2 className="w-90 h-7 mt-3 bg-gray-200 rounded-md animate-pulse" />
          <p className="w-80 h-4 mt-1 bg-gray-200 rounded-md animate-pulse" />

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="h-16 w-full bg-gray-200 rounded-md animate-pulse" />
            <div className="h-16 w-full bg-gray-200 rounded-md animate-pulse" />
            <div className="h-16 w-full bg-gray-200 rounded-md animate-pulse" />
            <div className="h-16 w-full bg-gray-200 rounded-md animate-pulse" />
            <div className="h-16 w-full bg-gray-200 rounded-md animate-pulse" />
            <div className="h-16 w-full bg-gray-200 rounded-md animate-pulse" />
            <div className="h-16 w-full bg-gray-200 rounded-md animate-pulse" />
            <div className="h-16 w-full bg-gray-200 rounded-md animate-pulse" />
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
        <section className="h-25 w-full rounded-lg bg-gray-200 animate-pulse"></section>
      </div>
    </div>
  );
}
