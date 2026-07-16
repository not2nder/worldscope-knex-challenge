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

          <input
            type='text'
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Search Countries...'
            className='w-full px-4 py-2 rounded-xl border border-slate-300 bg-white'
          />
          
          <div className='grid grid-cols-3 gap-2 space-y-5 space-x-2'>
            {filteredCountries.map((country) => (
              <Card key={country.names.common} country={country}/>
            ))}
          </div>
        </div>
      </div> 
    </div>
  )
}

export default App
