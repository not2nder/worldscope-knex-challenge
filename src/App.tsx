import { useEffect, useState } from 'react';
import type { Country } from './types/country';
import type { APIResponse } from './types/api';
import Header from './components/Header'
import Card from './components/Card';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const URL = import.meta.env.VITE_BASE_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    const fetchCountries = async() => {
      const response = await fetch(URL, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${API_KEY}`
          },
        });

      const data: APIResponse = await response.json();
      console.log(data)
      setCountries(data.data.objects);
    }
    fetchCountries()
  }, []);

  return (
    <div>
      <Header/>
      <div className="min-h-screen w-screen flex flex-col items-center p-4 bg-slate-100">
        <h2 className="text-3xl font-bold bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Explore countries around the world
        </h2>
        
        <p className="text-slate-500">Discover key information about all countries.</p> 
        
        <div className='grid grid-cols-3 gap-2'>
          {countries.map((country) => (
            <Card key={country.names.common} country={country}/>
          ))}
        </div>
      </div> 
    </div>
  )
}

export default App
