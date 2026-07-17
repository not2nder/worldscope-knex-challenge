import { useState } from 'react';
import { useCountries } from './hooks/useCountries';

import Header from './components/Header'
import Card from './components/Card';
import Pagination from './components/Pagination';
import GridSkeleton from './components/GridSkeleton';

import { Search } from 'lucide-react';

import { sortCountries, type SortOption } from './utils/sortCountries';
import { filterCountries } from './utils/filterCountries';
import { paginateCountries } from './utils/paginateCountries';

function App() {
  const [query, setQuery] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [sortOption, setSortOption] = useState<SortOption>("A-Z asc");
  const [page, setPage] = useState<number>(1);

  const {
    data: countries = [],
    isLoading,
    isError,
  } = useCountries();

  const ITEMS_PER_PAGE: number = 25;

  const filteredCountries = filterCountries(countries, query, selectedRegion);
  const sortedCountries = sortCountries(filteredCountries, sortOption);
  const paginatedCountries = paginateCountries(sortedCountries, page, ITEMS_PER_PAGE);
  
  const totalPages = Math.ceil(sortedCountries.length / ITEMS_PER_PAGE);

  const REGIONS: string[] = ["Africa","Americas","Asia","Europe","Oceania"];
  
  const SORT_GROUPS: SortOption[] = [
    "A-Z asc",
    "A-Z desc",
    "Population asc",
    "Population desc"
  ];

  if (isError) {
    return(
      <p>error fetching data</p>
    )
  }

  return (
    <main className='min-h-screen w-full bg-linear-to-br from-slate-50 via-white to-cyan-50 text-slate-950'>
      <Header/>
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8"> 
        <div className='space-y-3 flex flex-col items-center'>
          <h2 className="text-3xl font-bold bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Explore countries around the world
          </h2>

          <p className="text-slate-500">Discover key information about all countries.</p> 

          <div className='w-full gap-2 py-5 flex-col md:flex md:flex-row space-y-2.5'>
            <div className='relative w-full'>
              <span className='pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400'><Search/></span>
              <input
                type='text'
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setPage(1);
                }}
                placeholder='Search Countries...'
                className='h-12 w-full rounded-md border border-slate-300 bg-white pl-11 pr-4 text-sm text-slate-900 outline-none'/>
            </div>

            <div className='flex gap-2'>
              <select
                value={selectedRegion}
                onChange={(event) => {
                  setSelectedRegion(event.target.value);
                  setPage(1);
                }}
                className='w-full h-12 rounded-md border border-slate-300 bg-white px-3'>
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
                className='w-full h-12 rounded-md border border-slate-300 bg-white px-3'
              >
                {SORT_GROUPS.map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </select>
            </div>
          </div> 
         
          {isLoading ? (
            <GridSkeleton />
          ): (
            <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'> 
              {paginatedCountries.map((country) => (
                <Card key={country.codes.alpha_3} country={country}/>
              ))}
            </div>
          )}

          <Pagination 
            totalPages={totalPages}
            currentPage={page}
            totalItems={sortedCountries.length}
            onPageChange={setPage}
            currentItems={paginatedCountries.length}/>
        </div>
      </div> 
    </main>
  )
}

export default App
