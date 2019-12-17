import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  height: 42px;
  flex-direction: row;
`;

export const Number = styled.View`
  width: 20%;
  background-color: ${darken(0.03, '#7159c1')};
  border-top-left-radius: 4;
  border-bottom-left-radius: 4;
  flex-direction: row;
  align-items: center;
`;

export const NumberText = styled.Text`
  flex: 1;
  text-align: center;
  color: #fff;
`;

export const Title = styled.View`
  width: 80%;
  background-color: #7459c1;
  border-top-right-radius: 4;
  border-bottom-right-radius: 4;
  flex-direction: row;
  align-items: center;
`;

export const TitleText = styled.Text`
  flex: 1;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
`;
