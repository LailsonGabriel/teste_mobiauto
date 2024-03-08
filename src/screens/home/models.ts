import { Brand } from "../../models/brands.model";

export interface HomeViewModel {
  brands: Brand[],
  setOptionToResquest: (option: string, txt: string | number) => void; 
  optionSearch: OptionSearch
}

export interface OptionSearch {
  model: string;
  year: string;
  brand: string;
}