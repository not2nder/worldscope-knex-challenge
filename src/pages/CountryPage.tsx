import { useParams } from "react-router-dom";
import { useCountry } from "../hooks/useCountries";
import MainLayout from "../layouts/MainLayout";

export default function CountryPage() {
  const { code } = useParams();
  const { data: country, isLoading, isError } = useCountry(code);

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
          src={country?.flag?.url_svg ?? country?.flag?.url_png}
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
      </div>
    </MainLayout>
  );
}
