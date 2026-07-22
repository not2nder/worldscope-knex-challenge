import type { Country } from "./country";

export type APIResponse = {
  data: {
    meta: {
      limit: number;
      offset: number;
      total: number;
    };
    objects: Country[];
  };
};
