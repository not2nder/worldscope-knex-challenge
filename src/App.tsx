import { useState } from 'react';
import Header from './components/Header'
import Card from './components/Card';
import Pagination from './components/Pagination';
import { Search } from 'lucide-react';
import { useCountries } from './hooks/useCountries';
import GridSkeleton from './components/GridSkeleton';
import type { Country } from './types/country';

function App() {
  const [query, setQuery] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("A-Z asc");

  const {
    data: countries = [],
    isLoading,
    isError,
  } = useCountries();

  const filteredCountries = countries.filter((country) => {
    const matchesQuery = country.names.common.toLowerCase().includes(query.trim().toLowerCase());
    const matchesRegion = selectedRegion === "all" || country.region === selectedRegion;

    return matchesQuery && matchesRegion
  });

  let sortedCountries = [...filteredCountries];

  if (sortBy == "A-Z desc") {
    sortedCountries = [...filteredCountries].sort((a,b) =>
      b.names.common.localeCompare(a.names.common) 
    );
  } else if (sortBy == "A-Z asc") {
    sortedCountries = [...filteredCountries].sort((a,b) =>
      a.names.common.localeCompare(b.names.common) 
    );
  } else if (sortBy == "Population asc") {
    sortedCountries = [...filteredCountries].sort(
      (a,b) => a.population - b.population 
    ); 
  } else if (sortBy == "Population desc") {
    sortedCountries = [...filteredCountries].sort(
      (a,b) => b.population - a.population 
    );
  }

  const [page, setPage] = useState<number>(1);

  const ITEMS_PER_PAGE: number = 25;
  
  const totalPages: number = Math.ceil(filteredCountries.length / ITEMS_PER_PAGE);
  const startIndex: number = (page - 1) * ITEMS_PER_PAGE;
  const endIndex: number = startIndex + ITEMS_PER_PAGE;

  const paginatedCountries: Country[] = sortedCountries.slice(startIndex, endIndex);

  const REGIONS: string[] = ["Africa","Americas","Asia","Europe","Oceania"];
  const SORT_GROUPS: string[] = ["A-Z asc", "A-Z desc", "Population asc", "Population desc"]

  if (isError) {
    return(
      <p>error fetching data</p>
    )
  }

  return (
    <main className='min-h-screen w-full bg-linear-to-br from-slate-50 via-white to-cyan-50 text-slate-950'>
      <Header/>
      <div className="mx-auto w-full max-x-7xl px-4 py-8 sm:px-6 lg:px-8"> 
        <div className='space-y-3 flex flex-col items-center'>
          <h2 className="text-3xl font-bold bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Explore countries around the world
          </h2>

          <p className="text-slate-500">Discover key information about all countries.</p> 

          <div className='w-full flex gap-2 py-5'>
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

            <select
              value={selectedRegion}
              onChange={(event) => {
                setSelectedRegion(event.target.value);
                setPage(1);
              }}
              className='h-12 rounded-md border border-slate-300 bg-white px-3'>
              <option value="all">All Regions</option>
              {REGIONS.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(event) => {
                setSortBy(event.target.value);
              }}
              className='h-12 rounded-md border border-slate-300 bg-white px-3'>
                {SORT_GROUPS.map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
            </select>
          </div> 
         
          {isLoading && <GridSkeleton />}
          <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'> 
            {paginatedCountries.map((country) => (
              <Card key={country.names.common} country={country}/>
            ))}
          </div>

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
