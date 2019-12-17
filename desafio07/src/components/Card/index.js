import React from 'react';

import Button from '../Button';

import { Container, ProductImage, Name, Price } from './style';

function Card({ item, onPress, amount }) {
  return (
    <Container>
      <ProductImage
        source={{
          uri: item.image,
        }}
        resizeMode="contain"
      />
      <Name>{item.title}</Name>
      <Price>{item.priceFormmated}</Price>
      <Button amount={amount} onPress={() => onPress(item.id)} />
    </Container>
  );
}

export default Card;
