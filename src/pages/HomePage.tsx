import { useState } from "react";
import { Search } from "lucide-react";

import { useCountries } from "../hooks/useCountries";

import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import GridSkeleton from "../components/GridSkeleton";
import EmptyState from "../components/EmptyState";

import { sortCountries, type SortOption } from "../utils/sortCountries";
import { filterCountries } from "../utils/filterCountries";
import { paginateCountries } from "../utils/paginateCountries";
import ErrorState from "../components/ErrorState";

const ITEMS_PER_PAGE = 25;

const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const SORT_GROUPS: SortOption[] = [
  "A-Z asc",
  "A-Z desc",
  "Population asc",
  "Population desc",
];

export default function HomePage() {
  const [query, setQuery] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [sortOption, setSortOption] = useState<SortOption>("A-Z asc");
  const [page, setPage] = useState<number>(1);

  const { data: countries = [], isLoading, isError } = useCountries();

  const filteredCountries = filterCountries(countries, query, selectedRegion);
  const sortedCountries = sortCountries(filteredCountries, sortOption);
  const paginatedCountries = paginateCountries(
    sortedCountries,
    page,
    ITEMS_PER_PAGE,
  );

  const totalPages = Math.ceil(sortedCountries.length / ITEMS_PER_PAGE);

  if (isError) {
    return (
      <MainLayout>
        <ErrorState
          title="Could not load countries"
          message="Please check your connection, API key or try again later"
        />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="flex flex-col items-center space-y-5">
        <section className="w-full py-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center rounded-full border border-cyan-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-cyan-300">
              🌎 Navigate the world with clarity
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-slate-100">
              Discover countries with{" "}
              <span className="bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                WorldScope
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-7 text-slate-500 sm:text-lg dark:text-slate-400">
              Explore flags, capitals, currencies, languages, regions and
              borders through a fast, clean and responsive country data
              platform.
            </p>
          </div>
        </section>

        <section className="w-full">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="relative w-full">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                <Search size={20} />
              </span>

              <input
                type="text"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setPage(1);
                }}
                placeholder="Search Countries..."
                className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:hover:border-slate-700"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:w-[430px]">
              <select
                value={selectedRegion}
                onChange={(event) => {
                  setSelectedRegion(event.target.value);
                  setPage(1);
                }}
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none transition hover:border-slate-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-700"
              >
                <option value="all">All Regions</option>

                {REGIONS.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>

              <select
                value={sortOption}
                onChange={(event) => {
                  setSortOption(event.target.value as SortOption);
                  setPage(1);
                }}
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none transition hover:border-slate-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-700"
              >
                {SORT_GROUPS.map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {!isLoading && sortedCountries.length > 0 && (
          <div className="flex w-full flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Showing {paginatedCountries.length} of {sortedCountries.length}{" "}
              results.
            </p>

            <p className="text-sm text-slate-400 dark:text-slate-500">
              Page {page} of {totalPages}
            </p>
          </div>
        )}

        {isLoading ? (
          <GridSkeleton />
        ) : sortedCountries.length === 0 ? (
          <EmptyState
            onReset={() => {
              setQuery("");
              setSelectedRegion("all");
              setSortOption("A-Z asc");
              setPage(1);
            }}
          />
        ) : (
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {paginatedCountries.map((country) => (
              <Card
                key={country.codes?.alpha_3 || country.names.common}
                country={country}
              />
            ))}
          </div>
        )}

        {!isLoading && sortedCountries.length > 0 && (
          <Pagination
            totalPages={totalPages}
            currentPage={page}
            totalItems={sortedCountries.length}
            onPageChange={setPage}
            currentItems={paginatedCountries.length}
          />
        )}
      </div>
    </MainLayout>
  );
}
