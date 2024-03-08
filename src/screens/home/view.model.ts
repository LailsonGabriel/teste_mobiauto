import { useEffect, useState } from "react";
import { HomeViewModel, OptionSearch } from "./models";
import Brands from "../../repositories/brand.reposity";
import { Brand } from "../../models/brands.model";
import { AxiosError } from "axios";

const useHomeViewModel = (): HomeViewModel => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [optionSearch, setOptionSearch] = useState<OptionSearch>({ brand: "", model: "", year: "" });

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

  const setOptionToResquest = (option: string, txt: string) => setOptionSearch({ ...optionSearch, [option]: txt });

  return {
    brands,
    setOptionToResquest
  }
}

export default useHomeViewModel;