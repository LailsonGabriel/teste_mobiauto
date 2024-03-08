import { Brand } from "./brands.model";

export interface InputSearchable {
  key: number;
  label: string;
  section?: boolean;
}

export interface ISearchable {
  allData: Brand[];
  searchText: string;
  initValue: string;
  onChange: (option: string) => void;
}