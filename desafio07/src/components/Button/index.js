import React from 'react';

import { Container, Number, NumberText, Title, TitleText } from './style';

function Button({ onPress, amount }) {
  return (
    <Container onPress={() => onPress()}>
      <Number>
        <NumberText>{amount}</NumberText>
      </Number>
      <Title>
        <TitleText>Adicionar</TitleText>
      </Title>
    </Container>
  );
}

export default Button;
