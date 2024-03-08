import { View, Text } from "react-native";
import React from "react";

import * as S from './styles';
import useHomeViewModel from "./view.model";

export default function Home() {
  const { brands } = useHomeViewModel();
  console.log(brands)

  return (
    <S.Container>
      <Text>Home</Text>
    </S.Container>
  );
}
