import type { Country } from "./country"

export type APIResponse = {
  data: {
    objects: Country[];
  };
}
