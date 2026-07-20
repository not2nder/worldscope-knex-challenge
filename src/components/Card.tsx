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
    <Link to={getCountryRoute(country)}>
      <div className="bg-white flex flex-col border border-slate-300 rounded-xl cursor-pointer p-3 hover:-translate-y-1.5 transition-all duration-200">
        <img
          src={
            (country.flag.url_svg ?? country.flag.url_png) || flagPlaceholder
          }
          alt={`Flag of ${country.names.common}`}
          className="h-full w-full rounded-md aspect-video object-cover object-center"
        />

        <div className="space-y-3 pt-2 text-sm">
          <h3 className="font-bold text-xl">
            {country.flag.emoji} {country.names.common}
          </h3>
          <p>
            <span className="bg-cyan-200/25 text-cyan-700 border-cyan-700/10 border rounded-md p-0.5 px-2.5">
              {country.region}
            </span>
          </p>
          <div className="flex items-center gap-2">
            <p className="text-slate-500 flex gap-2 items-center">
              <UsersRound /> Population
            </p>
            <p className="text-slate-900">
              {country.population.toLocaleString()}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-slate-500 flex gap-2 items-center">
              <CircleDollarSign /> Currency
            </p>
            <p className="text-slate-900 truncate">
              {country.currencies[0]?.name}{" "}
              {country.currencies[0] && `(${country.currencies[0].code})`}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
