import type { Country } from "../types/country";

export function getCountryRoute(country: Country): string {
  const alpha_3 = country.codes?.alpha_3?.trim();

  if (alpha_3) {
    return `/country/${alpha_3}`;
  }

  return `/country/name/${encodeURIComponent(country.names.common)}`;
}
