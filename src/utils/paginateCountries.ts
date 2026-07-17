import type { Country } from "../types/country";

export function paginateCountries(
    countries: Country[],
    page: number,
    ITEMS_PER_PAGE: number
): Country[] {    
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    return countries.slice(startIndex, endIndex);
}
