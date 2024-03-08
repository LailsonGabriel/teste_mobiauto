import React, { useState } from "react";

import { ISearchable, InputSearchable } from "../../models/input.model";

import * as S from './styles';
import ModalSelector from "react-native-modal-selector-searchable";

export default function Searchable({ allData, initValue, searchText, onChange }: ISearchable) {
  const [data] = useState<InputSearchable[]>(allData.map((option) => ({ key: Number(option.codigo), label: option.nome }))); 

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
