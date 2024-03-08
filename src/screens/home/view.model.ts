import { useEffect, useState } from "react";
import { HomeViewModel, OptionSearch } from "./models";
import Brands from "../../repositories/brand.reposity";
import { Brand } from "../../models/brands.model";
import { AxiosError } from "axios";
import ModelsCar from "../../repositories/model.repository";

const useHomeViewModel = (): HomeViewModel => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [models, setModels] = useState<Brand[]>([]);
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
    setOptionSearch({ ...optionSearch, [option]: txt });

    switch (option) {
      case "brand":
        ModelsCar.getModel(txt).then((response) => setModels(response.data.modelos));
        break;
      case "year":
        console.log("https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos");
        break;
    }
  };

  return {
    brands,
    setOptionToResquest,
    optionSearch
  }
}

export default useHomeViewModel;