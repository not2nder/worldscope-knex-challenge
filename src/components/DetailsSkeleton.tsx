import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import imagePlaceholder from "../assets/imagePlaceholder.svg";

export default function DetailsSkeleton() {
  return (
    <div className="space-y-4">
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        <ChevronLeft size={18} />
        Back to countries
      </Link>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* left */}
        <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-hidden rounded-md bg-slate-100 dark:bg-slate-800">
            <img
              src={imagePlaceholder}
              alt=""
              aria-hidden="true"
              className="aspect-video w-full animate-pulse object-cover object-center opacity-70 dark:opacity-40"
            />
          </div>

          <div className="border-t border-slate-100 pt-3 dark:border-slate-800">
            <div className="h-4 w-28 animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />

            <div className="mt-3 flex items-center gap-2">
              <div className="h-7 w-7 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
              <div className="h-7 w-7 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
              <div className="h-7 w-7 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
              <div className="h-7 w-7 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
            </div>
          </div>
        </div>

        {/* right */}
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-wrap gap-2">
            <span className="h-6 w-20 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
            <span className="h-6 w-32 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
          </div>

          <div className="mt-4 h-8 w-72 max-w-full animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />
          <div className="mt-2 h-4 w-80 max-w-full animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {Array.from({ length: 8 }, (_, index) => (
              <div
                key={index}
                className="rounded-md border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-800/50"
              >
                <div className="flex gap-3">
                  <div className="h-8 w-8 shrink-0 animate-pulse rounded-md bg-slate-200 dark:bg-slate-700" />

                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="h-3 w-20 animate-pulse rounded-md bg-slate-200 dark:bg-slate-700" />
                    <div className="h-4 w-full animate-pulse rounded-md bg-slate-200 dark:bg-slate-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <section className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
          <div className="h-4 w-40 animate-pulse rounded-md bg-slate-200 dark:bg-slate-700" />

          <div className="mt-4 flex flex-wrap gap-2">
            <div className="h-8 w-16 animate-pulse rounded-full bg-slate-200 dark:bg-slate-700" />
            <div className="h-8 w-16 animate-pulse rounded-full bg-slate-200 dark:bg-slate-700" />
            <div className="h-8 w-16 animate-pulse rounded-full bg-slate-200 dark:bg-slate-700" />
            <div className="h-8 w-16 animate-pulse rounded-full bg-slate-200 dark:bg-slate-700" />
          </div>
        </section>
      </div>
    </div>
  );
}
