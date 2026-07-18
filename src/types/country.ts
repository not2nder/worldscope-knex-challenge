export type Country = {
  names: {
    common: string;
    official: string;
  };
  codes: {
    alpha_3: string;
  };
  languages: {
    name: string;
  }[];
  region: string;
  flag: {
    url_png: string;
    url_svg: string;
    emoji: string;
  };
  population: number;
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  area: {
    kilometers: number;
  };
  timezones: string[];
  borders: string[];
};
