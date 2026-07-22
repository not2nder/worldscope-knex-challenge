import type { Country } from "../types/country";

export function filterCountries(
  countries: Country[],
  query: string,
  selectedRegion: string,
): Country[] {
  const filteredCountries = countries.filter((country) => {
    const matchesQuery = country.names.common
      .toLowerCase()
      .includes(query.trim().toLowerCase());

    const matchesRegion =
      selectedRegion === "all" || country.region === selectedRegion;

    return matchesQuery && matchesRegion;
  });

  return filteredCountries;
}
