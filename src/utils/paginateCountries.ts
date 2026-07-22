import type { Country } from "../types/country";

export function paginateCountries(
  countries: Country[],
  page: number,
  itemsPerPage: number,
): Country[] {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return countries.slice(startIndex, endIndex);
}
