import React from "react";

import * as S from "./styles";
import useHomeViewModel from "./view.model";
import Searchable from "../../components/input-searchable";

export default function Home() {
  const { brands, models, years, setOptionToResquest, optionSearch } = useHomeViewModel();

  console.log(optionSearch)

  return (
    <S.Container>
      {brands?.length > 0 && (
        <Searchable
          initValue="Clique para selecionar uma marca de veículo"
          searchText="Pesquise por uma marca de veículo"
          allData={brands}
          onChange={(option: string) => setOptionToResquest("brand", option)}
        />
      )}
      <Searchable
        initValue="Clique para selecionar um modelo de veículo"
        searchText="Pesquise por um modelo de veículo"
        allData={models}
        onChange={(option: string) => setOptionToResquest("model", option)}
      />

      <Searchable
        initValue="Clique para selecionar um ano de veículo"
        searchText="Pesquise pelo ano do veículo"
        allData={years}
        onChange={(option: string) => setOptionToResquest("year", option)}
      />
    </S.Container>
  );
}
