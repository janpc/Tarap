import styled from 'styled-components/native';

export const TabBarContainer = styled.View`
  height: 90px;
  flex-direction: row;
  justify-content: center;
  padding: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
`;
export const SvgContainer = styled.View`
  height: 40px;
`;
export const Tab = styled.TouchableOpacity`
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: #394d55;
  ${({ isCurrentPage }) => isCurrentPage && 'background-color: #F2C94C'};
`;
