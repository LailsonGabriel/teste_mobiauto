import { Brand } from "./brands.model";

export interface CarModelsResponse {
  modelos: CarModels[]
}

export interface CarModels extends Brand {}