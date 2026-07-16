import { useEffect, useState } from 'react';
import type { Country } from './types/country';
import type { APIResponse } from './types/api';
import Header from './components/Header'
import Card from './components/Card';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const URL = import.meta.env.VITE_BASE_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    const LIMIT = 100;

    const fetchCountries = async() => {
      const response = await fetch(`${URL}?limit=${LIMIT}&offset=0`, {
          headers: { Authorization: `Bearer ${API_KEY}` },
        });
      
      const data: APIResponse = await response.json();
      const total = data.data.meta.total;
      const allCountries = [...data.data.objects];

      for (let offset = LIMIT; offset < total; offset += LIMIT) {
        const newResponse = await fetch(`${URL}?limit=${LIMIT}&offset=${offset}`, {
          headers: {Authorization: `Bearer ${API_KEY}`}
        });
        const newData: APIResponse = await newResponse.json()

        allCountries.push(...newData.data.objects)
      };

      setCountries(allCountries);
    }
    fetchCountries()
  }, []);

  const filteredCountries = countries.filter((country) => 
    country.names.common.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div>
      <Header/>
      <div className="min-h-screen w-full flex flex-col p-4 bg-slate-100"> 
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
