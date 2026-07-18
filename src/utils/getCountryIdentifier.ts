import type { Country } from "../types/country";

export function getCountryIdentifier(country: Country): string {
  return (
    country.codes?.alpha_3 ||
    country.names.common
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")
  );
}
