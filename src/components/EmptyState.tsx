import { Search } from "lucide-react";

type EmptyStateProps = {
  onReset: () => void;
};

export default function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <div className="w-full rounded-xl text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-200 text-slate-600">
        <Search size={22} />
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">
        No Results found :/
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
        Try changing your search term, selecting another region, or resetting
        the filters.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-5 rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        Reset filters
      </button>
    </div>
  );
}
