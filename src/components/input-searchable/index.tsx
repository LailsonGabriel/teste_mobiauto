import React, { useEffect, useState } from "react";

import { ISearchable, InputSearchable } from "../../models/input.model";

import * as S from './styles';
import ModalSelector from "react-native-modal-selector-searchable";

export default function Searchable({ allData, initValue, searchText, onChange }: ISearchable) {
  const factoryToModal = (): InputSearchable[] => (allData.map((option) => ({ key: Number(option.codigo), label: option.nome })));
  const [data, setData] = useState<InputSearchable[]>(factoryToModal()); 

  useEffect(() => {
    setData(allData.map((option) => ({ key: Number(option.codigo), label: option.nome })))
  }, [allData]);

  return (
    <S.Container>
      <ModalSelector
        placeHolderTextColor="black"
        cancelText="Cancelar"
        searchText={searchText}
        data={data}
        initValue={initValue}
        onChange={(option: InputSearchable) => onChange(String(option.key))}
        renderItem={({ item }) => (
          <S.Item>{item.label}</S.Item>
        )}
      />
    </S.Container>
  );
}
