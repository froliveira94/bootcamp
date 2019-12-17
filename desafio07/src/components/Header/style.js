import styled from 'styled-components';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #141419;
  padding: 30px 0;
`;

export const CartContainer = styled.TouchableOpacity`
  position: relative;
  margin-top: 10px;
  margin-right: 30px;
`;

export const LogoContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})``;

export const Notification = styled.View`
  position: absolute;
  right: -4px;
  top: -4px;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: #7159c1;
  z-index: 2;
`;

export const NotificationText = styled.Text`
  color: #fff;
  font-size: 11px;
  text-align: center;
  font-weight: bold;
`;
