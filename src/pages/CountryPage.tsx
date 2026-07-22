import { Link, useParams } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Clock,
  Map,
  MapPin,
  MessageCircle,
  Ruler,
  UsersRound,
} from "lucide-react";

import { useCountry } from "../hooks/useCountries";
import MainLayout from "../layouts/MainLayout";
import flagPlaceholder from "../assets/flagPlaceholder.svg";
import CountryItem from "../components/CountryItem";
import DetailsSkeleton from "../components/DetailsSkeleton";
import ErrorState from "../components/ErrorState";

export default function CountryPage() {
  const { code, name } = useParams();
  const { data: country, isLoading, isError } = useCountry({ code, name });

  if (isLoading) {
    return (
      <MainLayout>
        <DetailsSkeleton />
      </MainLayout>
    );
  }

  if (isError || !country) {
    return (
      <MainLayout>
        <ErrorState
          title="Could not load country details"
          message="The selected country could not be found or the API request failed."
        />
      </MainLayout>
    );
  }
  const flagUrl =
    (country.flag?.url_svg ?? country.flag?.url_png) || flagPlaceholder;

  const flagColors = country.flag?.colors?.palette || [];

  const capitals =
    country.capitals?.map((capital) => capital.name).join(", ") ||
    "Not informed";

  const languages =
    country.languages?.map((language) => language.name).join(", ") ||
    "Not informed";

  const currencies =
    country.currencies?.map((currency) => currency.name).join(", ") ||
    "Not informed";

  const timezones = country.timezones?.join(", ") || "Not informed";

  const population =
    country.population?.toLocaleString("en-US") ?? "Not informed";

  const area = country.area?.kilometers
    ? `${country.area.kilometers.toLocaleString("en-US")} km²`
    : "Not informed";

  return (
    <MainLayout>
      <div className="space-y-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <ChevronLeft size={18} />
          Back to countries
        </Link>

        <div className="grid gap-4 lg:grid-cols-2">
          {/* left */}
          {/* left */}
          <div className="self-start space-y-3 rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
            <div className="overflow-hidden rounded-md bg-slate-100 dark:bg-slate-800">
              <img
                src={flagUrl}
                alt={`Flag of ${country.names.common}`}
                className="aspect-video w-full object-cover object-center"
              />
            </div>

            {flagColors.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                  Flag palette
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {flagColors.map((color) => (
                    <div
                      key={color.hex}
                      title={color.hex}
                      style={{ backgroundColor: color.hex }}
                      className="h-7 w-7 rounded-full ring-1 ring-slate-900/10 dark:ring-white/10"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* right */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 ring-1 ring-cyan-700/10 dark:bg-cyan-400/10 dark:text-cyan-300 dark:ring-cyan-400/20">
                {country.region}
              </span>

              {country.subregion && (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-700/10 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700">
                  {country.subregion}
                </span>
              )}
            </div>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              {country.flag.emoji} {country.names.common}
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {country.names.official}
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <CountryItem
                icon={<MapPin size={18} />}
                title="Capital"
                text={capitals}
              />

              <CountryItem
                icon={<Map size={18} />}
                title="Region"
                text={country.region}
              />

              <CountryItem
                icon={<Map size={18} />}
                title="Subregion"
                text={country.subregion || "Not informed"}
              />

              <CountryItem
                icon={<UsersRound size={18} />}
                title="Population"
                text={population}
              />

              <CountryItem
                icon={<Ruler size={18} />}
                title="Area"
                text={area}
              />

              <CountryItem
                icon={<MessageCircle size={18} />}
                title="Languages"
                text={languages}
              />

              <CountryItem
                icon={<CircleDollarSign size={18} />}
                title="Currencies"
                text={currencies}
              />

              <CountryItem
                icon={<Clock size={18} />}
                title="Timezones"
                text={timezones}
              />
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <section className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Border Countries ({country.borders.length ?? 0})
                </h3>
              </div>
            </div>

            {country.borders && country.borders.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {country.borders.map((border) => (
                  <Link
                    key={border}
                    to={`/country/${border}`}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-300"
                  >
                    <span>{border}</span>

                    <ChevronRight
                      size={16}
                      className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-cyan-600"
                    />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-2 text-slate-400">
                This country has no listed border countries.
              </div>
            )}
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
