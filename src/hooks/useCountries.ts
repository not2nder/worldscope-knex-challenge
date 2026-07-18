import { useQuery } from "@tanstack/react-query";
import {
  getAllCountries,
  getCountryByCode,
  getCountryByName,
} from "../services/countriesService";

type useCountryParams = {
  code?: string;
  name?: string;
};

export function useCountries() {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });
}

export function useCountry({ code, name }: useCountryParams) {
  return useQuery({
    queryKey: code ? ["country", "code", code] : ["country", "name", name],
    queryFn: () => {
      if (code) {
        return getCountryByCode(code);
      }

      if (name) {
        return getCountryByName(name);
      }

      throw new Error("Country identifier not provided.");
    },
    enabled: Boolean(code || name),
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });
}
