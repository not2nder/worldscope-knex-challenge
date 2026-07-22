import { Search } from "lucide-react";

type EmptyStateProps = {
  onReset: () => void;
};

export default function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <div className="w-full rounded-xl text-center py-3">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
        <Search size={22} />
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-slate-100">
        No Results found
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
        Try changing your search term, selecting another region, or resetting
        the filters.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-5 rounded-md bg-cyan-600 px-4 py-2 text-white transition hover:bg-cyan-700"
      >
        Reset filters
      </button>
    </div>
  );
}
