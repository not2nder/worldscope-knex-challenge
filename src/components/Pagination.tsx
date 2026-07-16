type PaginationProps = {
    totalPages: number;
    currentPage: number;
    totalItems: number;
    currentItems: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({totalPages, currentPage, totalItems, currentItems, onPageChange}: PaginationProps){
    const pages = Array.from({length: totalPages}, (_, index) => index+1);

    return (
        <div className="w-full mt-8 flex items-center justify-between gap-3 ">
            <div className="text-slate-400">
                Page {currentPage} of {totalPages}
            </div>

            <div className="flex gap-1.5">
                {pages.map(i => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => onPageChange(i)}
                        className={
                            currentPage === i
                            ? "rounded-md border border-slate-300 bg-cyan-100 px-4 py-2 text-sm"
                            : "rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                        }
                    >{i}
                    </button>
                ))}
            </div>


            <div className="text-slate-400">
                Showing {currentItems} of {totalItems} Results
            </div>
        </div>
    )
}