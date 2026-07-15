import type { Country } from "../types/country"

type CardProps = {
    country: Country;
}

export default function Card({country}: CardProps) {
    return (
        <div className='bg-white flex flex-col border border-slate-400 rounded-xl'>
            <img className='rounded-t-xl aspect-video object-cover' src={country.flag.url_svg ?? country.flag.url_png}></img>

            <div className='p-2'>
                <h3 className='font-bold'>{country.names.official} {country.flag.emoji}</h3>
                <p>Region: {country.region}</p>
                <p>Population: {country.population}</p>
                <p>Currency: {country.currencies[0]?.name ?? "No Currency Information."}</p>
            </div>
        </div>
    )
}