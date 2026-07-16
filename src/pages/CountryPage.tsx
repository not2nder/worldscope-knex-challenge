import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { APIResponse } from "../types/api";
import type { Country } from "../types/country";
import Header from "../components/Header";

export default function CountryPage(){
    const {code} = useParams();
    const [country, setCountry] = useState<Country | null>()
    
    useEffect(() => {
        const URL = import.meta.env.VITE_BASE_URL;
        const API_KEY = import.meta.env.VITE_API_KEY;

        const fetchCountry = async() => {
            const response = await fetch(`${URL}/codes.alpha_3/${code}`, {    
                headers: {
                    Authorization: `Bearer ${API_KEY}`
                },
            });

            const data: APIResponse = await response.json();
            setCountry(data.data.objects[0]);
        }
        fetchCountry()
    }, []);

    return (
        <div className="min-h-screen">
            <Header/>
            <div className="p-3 bg-slate-100 h-screen">
                <div className="flex flex-col bg-white rounded-xl border border-slate-300 p-3 space-y-3">
                    <h2 className="text-2xl font-bold">{country?.names.common}</h2>
                    <img
                        src={country?.flag?.url_svg ?? country?.flag?.url_png}
                        className="rounded-xl aspect-video object-cover object-center"
                    ></img>

                    <p><strong>Official Name</strong>: {country?.names.official}</p>
                    <p><strong>Region</strong>: {country?.region}</p> 
                    <p><strong>Population</strong>: {country?.population}</p>
                    <p><strong>Area</strong>: {country?.area.kilometers} Kilometers</p>
                    <p><strong>Currencies</strong>: {country?.currencies.map(currency => `${currency.name} (${currency.code})`).join(", ")}</p>
                    <p><strong>Languages</strong>: {country?.languages.map(language => language.name).join(", ")}</p>
                    <p><strong>Timezones</strong>: {country?.timezones.join(", ")}</p>
                </div>
            </div>
        </div>
    )
}