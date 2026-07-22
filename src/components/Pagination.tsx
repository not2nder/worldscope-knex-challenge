import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  return (
    totalPages > 1 && (
      <div className="w-full mt-8 flex items-center justify-center gap-3 ">
        <div className="flex gap-2">
          <button
            type="button"
            disabled={isFirstPage}
            aria-label="Previous page"
            onClick={() => {
              if (currentPage <= 1) {
                return;
              }
              onPageChange(currentPage - 1);
            }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <ChevronLeft size={18} />
          </button>

          <button className="flex items-center justify-center rounded-full w-10 h-10 bg-cyan-500 text-white p-2">
            {currentPage}
          </button>

          <button
            type="button"
            disabled={isLastPage}
            onClick={() => {
              if (currentPage >= totalPages) {
                return;
              }
              onPageChange(currentPage + 1);
            }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    )
  );
}
