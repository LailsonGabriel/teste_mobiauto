import { Brand } from "./brands.model";

export interface CarModelsResponse {
  modelos: CarModels[];
  anos: CarModels[];
}

export interface CarModels extends Brand {}