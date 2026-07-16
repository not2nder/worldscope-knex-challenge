import { useState } from 'react';
import Header from './components/Header'
import Card from './components/Card';
import { Search } from 'lucide-react';
import { useCountries } from './hooks/useCountries';

function App() {
  const [query, setQuery] = useState("");
  const {
    data: countries = [],
    isLoading,
    isError,
    error
  } = useCountries();

  const filteredCountries = countries.filter((country) => 
    country.names.common.toLowerCase().includes(query.trim().toLowerCase())
  );
  if (isLoading) {
    return (
      <div>
        <Header/>
        <main className='min-h-screen bg-slate-100 p-4'>
          <p>Loading Countries...</p>
        </main>
      </div>
    )
  }

  if (isError) {
    return(
      <p>Error Fetching data</p>
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

          <div className='relative w-full max-w-xl'>
            <span className='pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400'><Search/></span>
            <input
              type='text'
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder='Search Countries...'
              className='h-12 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-900 shadow-sm outline-none'
            />
          </div>
          
          <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {filteredCountries.map((country) => (
              <Card key={country.names.common} country={country}/>
            ))}
          </div>
        </div>
      </div> 
    </main>
  )
}

export default App
