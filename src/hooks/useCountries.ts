import { useQuery } from "@tanstack/react-query";
import { getAllCountries, getCountryByCode } from "../services/countriesService";

export function useCountries() {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });
}

export function useCountry(code?: string) {
    return useQuery({
        queryKey: ["country", code],
        queryFn: () => getCountryByCode(code!),
        enabled: Boolean(code),
        staleTime: 1000 * 60 * 60 * 24,
        gcTime: 1000 * 60 * 60 * 24,
    })
}