import { AxiosResponse } from "axios";
import client from "./client";
import { CarModelsResponse } from "../models/models.model";

export default class ModelsCar {
  static async getModel(modelNum: string): Promise<AxiosResponse<CarModelsResponse, CarModelsResponse>> {
    return await client.get(`/carros/marcas/${modelNum}/modelos`);
  }
}