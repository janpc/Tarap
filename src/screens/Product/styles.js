import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  margin-bottom: 100px;
  background: #fff;
`;

export const TopInfoContainer = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 20px 25px;
`;

export const MainImage = styled.Image`
  width: 120px;
  height: 120px;
  aspect-ratio: 1;
  resize-mode: cover;
`;

export const TopInfo = styled.View`
  flex: 1;
  margin-left: 15px;
`;

export const ProductName = styled.Text`
  font-family: ${fonts.bold};
  font-size: 20px;
  line-height: 19px;
  max-width: 95%;
`;

export const BrandContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BrandName = styled.Text`
  font-family: ${fonts.light};
  font-size: 18px;
  line-height: 17px;
  max-width: 95%;
  margin-top: 10px;
`;

export const TopInfoText = styled.Text`
  font-family: ${fonts.light};
  font-size: 16px;
  line-height: 15px;
  align-self: flex-end;
  margin-top: 5px;
`;

export const FavoriteContainer = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
`;

export const LabelsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 5px 25px;
  justify-content: flex-end;
`;

export const Separator = styled.View`
  flex: 1;
  border-width: 1px;
  border-color: #f2c94c;
  border-style: dashed;
  margin: 10px 2px;
`;

export const Separation = styled.View`
  padding: 18px 26px;
`;

export const SeparationTitle = styled.Text`
  color: ${colors.main};
  font-family: ${fonts.bold};
  font-size: 24px;
  line-height: 23px;
  ${({ bottom }) => (bottom ? `margin-bottom: ${bottom}px;` : null)}
`;

export const TitleWithImage = styled.View`
  flex-direction: row;
  align-items: flex-end;
  ${({ top }) => (top ? `margin-top: ${top}px;` : null)}
`;

export const OriginRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 11px;
`;
export const OriginTitle = styled.Text`
  font-family: ${fonts.light};
  font-size: 20px;
  line-height: 19px;
`;

export const OriginText = styled.Text`
  font-family: ${fonts.bold};
  font-size: 20px;
  line-height: 19px;
  margin-left: 10px;
`;

export const MarketsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

export const Market = styled.Text`
  font-family: ${fonts.bold};
  font-size: 16px;
  line-height: 15px;
  ${({ first }) => !first && `margin-left: 10px;`}
`;

export const Score = styled.Text`
  font-family: ${fonts.light};
  font-size: 14px;
  line-height: 14px;
  color: ${colors.softGreyText};
`;

export const Ean = styled.Text`
  font-family: ${fonts.light};
  font-size: 10px;
  line-height: 10px;
  margin-top: 80px;
  margin-left: 30px;
  margin-bottom: 30px;
`;
