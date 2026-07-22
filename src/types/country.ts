export type Country = {
  names: {
    common: string;
    official: string;
  };

  capitals?: {
    name: string;
  }[];

  codes: {
    alpha_3?: string;
    alpha_2?: string;
  };

  languages?: {
    name: string;
  }[];

  region: string;
  subregion?: string;

  flag: {
    url_png?: string;
    url_svg?: string;
    emoji?: string;
    colors?: {
      palette?: {
        hex: string;
      }[];
    };
  };

  population: number;

  currencies?: {
    code?: string;
    name?: string;
    symbol?: string;
  }[];

  area?: {
    kilometers?: number;
  };

  timezones?: string[];
  borders: string[];
};
