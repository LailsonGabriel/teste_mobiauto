import { AxiosResponse } from "axios";
import client from "./client";
import { CarYears } from "../models/years.model";

export default class YearCar {
  static async getYear(modelNum: string, yearNum: string): Promise<AxiosResponse<CarYears[], CarYears[]>> {
    return await client.get(`/carros/marcas/${modelNum}/modelos/${yearNum}/anos`);
  }
}