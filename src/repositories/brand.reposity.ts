import { AxiosResponse } from "axios";
import client from "./client";
import { Brand, BrandResponseAPI } from "../models/brands.model";

export default class Brands {
  static async getBrands(): Promise<AxiosResponse<Brand[], Brand[]>> {
    return await client.get('/carros/marcas');
  }
}