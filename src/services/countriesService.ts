import type { APIResponse } from "../types/api";
import type { Country } from "../types/country";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function getCountriesPage(
  limit: number,
  offset: number,
): Promise<APIResponse> {
  const response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });

  return response.json();
}

export async function getAllCountries(): Promise<Country[]> {
  const LIMIT = 100;

  const firstPage = await getCountriesPage(LIMIT, 0);

  const total = firstPage.data.meta.total;
  const countries = [...firstPage.data.objects];

  for (let offset = LIMIT; offset < total; offset += LIMIT) {
    const page = await getCountriesPage(LIMIT, offset);
    countries.push(...page.data.objects);
  }

  return countries;
}

export async function getCountryByCode(code: string): Promise<Country> {
  const response = await fetch(`${BASE_URL}/codes.alpha_3/${code}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Could not load country deatils");
  }

  const data: APIResponse = await response.json();

  return data.data.objects[0];
}

export async function getCountryByName(name: string): Promise<Country> {
  const response = await fetch(`${BASE_URL}/names.common/${name}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Could not load country details");
  }

  const data: APIResponse = await response.json();

  return data.data.objects[0];
}
