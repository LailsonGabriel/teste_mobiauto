import { useEffect, useState } from "react";
import { HomeViewModel, OptionSearch } from "./models";
import Brands from "../../repositories/brand.repository";
import { Brand } from "../../models/brands.model";
import { AxiosError } from "axios";
import ModelsCar from "../../repositories/model.repository";
import YearCar from "../../repositories/year.repository";

const useHomeViewModel = (): HomeViewModel => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [models, setModels] = useState<Brand[]>([]);
  const [years, setYears] = useState<Brand[]>([]);
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

  const setOptionToResquest = (option: string, txt: string) => {
    setOptionSearch((prevOptionSearch) => ({ ...prevOptionSearch, [option]: txt }));
  
    switch (option) {
      case "brand":
        ModelsCar.getModel(txt).then((response) => setModels(response.data.modelos)).catch((e: AxiosError<any>) => console.log(e));
        break;
      case "model":
        YearCar.getYear(txt, optionSearch.brand).then((response) => setYears(response.data)).catch((e: AxiosError<any>) => console.log(e))
        break;
    }
  };
  return {
    brands,
    setOptionToResquest,
    optionSearch,
    models,
    years
  }
}

export default useHomeViewModel;