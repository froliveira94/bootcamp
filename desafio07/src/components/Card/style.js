import styled from 'styled-components';

export const Container = styled.View`
  background-color: #fff;
  width: 250px;
  height: 380px;
  border-radius: 4px;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  width: 230px;
  height: 230px;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
  height: 35px;
`;

export const Price = styled.Text`
  font-size: 18px;
  color: #333;
  font-weight: bold;
  margin-bottom: 15px;
`;
