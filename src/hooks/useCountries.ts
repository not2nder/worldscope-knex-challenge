import { useQuery } from "@tanstack/react-query";
import {
  getAllCountries,
  getCountryByCode,
  getCountryByName,
} from "../services/countriesService";

type UseCountryParams = {
  code?: string;
  name?: string;
};

export function useCountries() {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
  });
}

export function useCountry({ code, name }: UseCountryParams) {
  return useQuery({
    queryKey: code ? ["country", "code", code] : ["country", "name", name],
    queryFn: () => {
      if (code) return getCountryByCode(code);
      if (name) return getCountryByName(name);

      throw new Error("Country identifier not provided.");
    },
    enabled: Boolean(code || name),
  });
}
