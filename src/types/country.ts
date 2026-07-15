export type Country = {
  names: {
    common: string;
    official: string;
  };
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
}