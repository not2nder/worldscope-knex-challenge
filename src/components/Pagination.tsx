import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
    totalPages: number;
    currentPage: number;
    totalItems: number;
    currentItems: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({totalPages, currentPage, totalItems, currentItems, onPageChange}: PaginationProps){

    return totalPages > 1 && (
        <div className="w-full mt-8 flex items-center justify-between gap-3 ">
            <div className="text-slate-400">
                Page {currentPage} of {totalPages}
            </div>

            <div className="flex gap-2">
                <button type="button"
                    onClick={() => {
                        if (currentPage <= 1) {
                            return;
                        }
                        onPageChange(currentPage - 1)
                    }}
                    className="cursor-pointer"
                ><ChevronLeft/>
                </button>

                <button className="flex items-center justify-center rounded-full w-10 h-10 bg-cyan-500 text-white p-2">
                    {currentPage}
                </button>
                
                <button type="button"
                    onClick={() => {
                        if (currentPage >= totalPages) {
                            return;
                        }
                        onPageChange(currentPage + 1);
                    }}
                    className="cursor-pointer"
                ><ChevronRight/>
                </button>
            </div>

            <div className="text-slate-400">
                {currentItems}/{totalItems}
            </div>
        </div>
    )
}