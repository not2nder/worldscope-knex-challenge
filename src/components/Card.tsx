import { Link } from "react-router-dom";
import type { Country } from "../types/country"

type CardProps = {
    country: Country;
}

export default function Card({country}: CardProps) {
    return (
        <Link to={`/country/${country.codes.alpha_3}`} 
            className='bg-white flex flex-col border border-slate-300 rounded-xl shadow-md shadow-slate-200 cursor-pointer'
        >
            <img className='rounded-t-xl aspect-video object-cover object-center' src={country.flag.url_svg ?? country.flag.url_png}></img>

            <div className='p-2'>
                <h3 className='font-bold'>{country.flag.emoji} {country.names.common}</h3>
                <p>Region: {country.region}</p>
                <p>Population: {country.population}</p>
                <p>Currency: {country.currencies[0]?.name ?? "No Currency Information."}</p>
            </div>
        </Link>
    )
}