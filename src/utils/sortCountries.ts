import type { Country } from "../types/country";

export type SortOption = 
    | "A-Z asc"
    | "A-Z desc"
    | "Population asc"
    | "Population desc";

export function sortCountries(countries: Country[], sortOption: SortOption): Country[] {
    const sortedCountries = [...countries];

    switch (sortOption) {
        case "A-Z desc":
            return sortedCountries.sort(
                (a, b) => b.names.common.localeCompare(a.names.common) 
            );
    
        case "A-Z asc":
            return sortedCountries.sort(
                (a, b) => a.names.common.localeCompare(b.names.common) 
            );
        
        case "Population asc":
            return sortedCountries.sort(
                (a, b) => a.population - b.population
            ); 
        
        case "Population desc":
            return sortedCountries.sort(
                (a, b) => b.population - a.population
            );
        
        default:
            return sortedCountries;
    }
}