import { useParams } from "react-router-dom";
import { useCountry } from "../hooks/useCountries";
import MainLayout from "../layouts/MainLayout";
import flagPlaceholder from "../assets/flagPlaceholder.svg";

import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function CountryPage() {
  const { code, name } = useParams();

  const { data: country, isLoading, isError } = useCountry({ code, name });

  if (isLoading) {
    return <p>Loading country info...</p>;
  }

  if (isError) {
    return <p>Error Fetching data</p>;
  }

  return (
    <MainLayout>
      <div className="flex flex-col bg-white rounded-xl border border-slate-300 p-3 space-y-3">
        <h2 className="text-2xl font-bold">
          {country?.flag.emoji} {country?.names.common}
        </h2>
        <img
          src={
            (country?.flag?.url_svg ?? country?.flag?.url_png) ||
            flagPlaceholder
          }
          className="rounded-xl aspect-video object-cover object-center"
        ></img>

        <p>
          <strong>Official Name</strong>: {country?.names.official}
        </p>
        <p>
          <strong>Region</strong>: {country?.region}
        </p>
        <p>
          <strong>Population</strong>: {country?.population}
        </p>
        <p>
          <strong>Area</strong>: {country?.area.kilometers} Kilometers
        </p>
        <p>
          <strong>Currencies</strong>:{" "}
          {country?.currencies
            .map((currency) => `${currency.name} (${currency.code})`)
            .join(", ")}
        </p>
        <p>
          <strong>Languages</strong>:{" "}
          {country?.languages.map((language) => language.name).join(", ")}
        </p>
        <p>
          <strong>Timezones</strong>: {country?.timezones.join(", ")}
        </p>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Border Countries: {country?.borders.length ?? 0}
          </h3>

          {country?.borders && country.borders.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {country.borders.map((border) => (
                <Link
                  key={border}
                  to={`/country/${border}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
                >
                  <span>{border}</span>
                  <span className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-cyan-600">
                    <ChevronRight />
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">
              This country has no listed border countries.
            </div>
          )}
        </section>
      </div>
    </MainLayout>
  );
}
