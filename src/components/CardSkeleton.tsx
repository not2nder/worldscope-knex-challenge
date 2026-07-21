import imagePlaceholder from "../assets/imagePlaceholder.svg";

export default function CardSkeleton() {
  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-200 dark:border-slate-800 dark:bg-slate-900">
      <div className="overflow-hidden rounded-md bg-slate-100 dark:bg-slate-800">
        <img
          src={imagePlaceholder}
          alt=""
          aria-hidden="true"
          className="aspect-video h-full w-full animate-pulse object-cover object-center opacity-70 dark:opacity-40"
        />
      </div>

      <div className="space-y-3 pt-3 text-sm">
        <div className="h-7 w-40 animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />

        <div className="h-6 w-24 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />

        <div className="flex items-center justify-between gap-3">
          <div className="h-5 w-28 animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />
          <div className="h-5 w-20 animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="h-5 w-24 animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />
          <div className="h-5 w-28 animate-pulse rounded-md bg-slate-200 dark:bg-slate-800" />
        </div>
      </div>
    </div>
  );
}
