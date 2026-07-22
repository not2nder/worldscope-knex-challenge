import { Link } from "react-router-dom";
import { CircleDollarSign, UsersRound } from "lucide-react";

import type { Country } from "../types/country";
import flagPlaceholder from "../assets/flagPlaceholder.svg";
import { getCountryRoute } from "../utils/getCountryRoute";

type CardProps = {
  country: Country;
};

export default function Card({ country }: CardProps) {
  return (
    <Link to={getCountryRoute(country)} className="group">
      <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
        <img
          src={
            (country.flag?.url_svg ?? country.flag?.url_png) || flagPlaceholder
          }
          alt={`Flag of ${country.names.common}`}
          className="aspect-video h-full w-full rounded-md object-cover object-center"
        />

        <div className="space-y-3 pt-3 text-sm">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            {country.flag?.emoji} {country.names.common}
          </h3>

          <p>
            <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-700 ring-1 ring-cyan-700/10 dark:bg-cyan-400/10 dark:text-cyan-300 dark:ring-cyan-400/20">
              {country.region}
            </span>
          </p>

          <div className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <UsersRound size={17} /> Population
            </p>

            <p className="font-medium text-slate-900 dark:text-slate-200">
              {country.population?.toLocaleString() ?? "Not informed"}
            </p>
          </div>

          <div className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <CircleDollarSign size={17} /> Currency
            </p>

            <p className="truncate text-right font-medium text-slate-900 dark:text-slate-200">
              {country.currencies?.[0]?.name ?? "Not informed"}{" "}
              {country.currencies?.[0] && `(${country.currencies[0].code})`}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
