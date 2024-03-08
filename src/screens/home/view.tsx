import React from "react";

import * as S from "./styles";
import useHomeViewModel from "./view.model";
import Searchable from "../../components/input-searchable";

export default function Home() {
  const { brands, setOptionToResquest, optionSearch } = useHomeViewModel();

  return (
    <S.Container>
      {brands.length > 1 && (
        <Searchable
          initValue="Clique para selecionar uma marca de veículo"
          searchText="Pesquise por uma marca de veículo"
          allData={brands}
          onChange={(option: string) => setOptionToResquest('brand', option)}
        />
      )}
      {
        optionSearch.brand && <></>
      }
    </S.Container>
  );
}
