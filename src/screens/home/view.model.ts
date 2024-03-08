import { useEffect, useState } from "react";
import { HomeViewModel } from "./models";
import Brands from "../../repositories/brand.reposity";
import { Brand } from "../../models/brands.model";
import { AxiosError } from "axios";

const useHomeViewModel = (): HomeViewModel => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    const getAllBrands = () => {
      Brands.getBrands().then((response) => {
        setBrands(response.data)
      }).catch((e: AxiosError<any>) => {
        console.log(e);
      });
    }
    
    getAllBrands();
  }, []);

  return {
    brands
  }
}

export default useHomeViewModel;