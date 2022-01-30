import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View } from 'react-native';

import Component from '../../components/Product/Component';

import { useCustomBackNavigation } from '../../navigation';
import colors from '../../constants/colors';
import { VerifiedBrandIcon, FavoriteIcon } from '../../icons';
import Labels from '../../icons/Labels';
import {
  TopInfoContainer,
  MainImage,
  TopInfo,
  ProductName,
  BrandName,
  BrandContainer,
  TopInfoText,
  FavoriteContainer,
  LabelsContainer,
  ScrollContainer,
  Separator,
  Separation,
  SeparationTitle,
  TitleWithImage,
  OriginRow,
  OriginTitle,
  OriginText,
  MarketsContainer,
  Market,
  Score,
  Ean,
} from './styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 100,
  },
});

const Product = ({ route }) => {
  useCustomBackNavigation();
  const product = route.params;
  console.log(product);
  return (
    <ScrollContainer>
      <TopInfoContainer>
        <MainImage
          source={{
            uri: product.image,
          }}
        />
        <TopInfo>
          <ProductName>{product.name}</ProductName>
          <BrandContainer>
            <BrandName>{product.brand.name}</BrandName>
            {product.brand.verified && <VerifiedBrandIcon />}
          </BrandContainer>
          <FavoriteContainer>
            <FavoriteIcon style={{ Self: 'flex-end' }} />
          </FavoriteContainer>
          <TopInfoText>
            {product.quantity} {product.quantity_units}
          </TopInfoText>
          {product.categories.map((category, index) => (
            <TopInfoText key={`category-${index}`}>{category}</TopInfoText>
          ))}
        </TopInfo>
      </TopInfoContainer>
      <LabelsContainer>
        {product.certified_labels.map(label => (
          <Labels
            key={label.id}
            image={label.image}
            alt={label.name}
            style={{ marginLeft: 15 }}
          />
        ))}
      </LabelsContainer>
      <Separator />
      <Separation>
        <TitleWithImage top={-5}>
          <SeparationTitle bottom="8">Envase </SeparationTitle>
          <Image
            source={require('../../img/sustainable_indicators/red.png')}
            alt="Sustainable Indicator"
          />
          {/* to do */}
        </TitleWithImage>
        {product.components.map((component, index) => (
          <Component
            component={component}
            key={'component-' + component.name + '_' + index}
            last={index === product.components.length - 1}
          />
        ))}
      </Separation>
      <Separator />
      <Separation>
        <SeparationTitle bottom="16">Origen </SeparationTitle>
        <OriginRow>
          <OriginTitle>Envase</OriginTitle>
          <OriginText>{product.package_origin}</OriginText>
        </OriginRow>
        <OriginRow>
          <OriginTitle>Producto principal </OriginTitle>
          <OriginText>{product.product_origin}</OriginText>
        </OriginRow>
        <OriginRow>
          <OriginTitle>Elaboración / Envasado </OriginTitle>
          <OriginText>{product.production_origin}</OriginText>
        </OriginRow>
      </Separation>
      <Separator />
      <Separation>
        <SeparationTitle bottom="16">Supermercados </SeparationTitle>
        <MarketsContainer>
          {product.markets.map((market, key) =>
            key == 0 ? (
              <Market first key={'market-' + market.id}>
                {market.name}
              </Market>
            ) : (
              <>
                <Market key={'market-separator-' + market.id}>/</Market>
                <Market key={'market-' + market.id}>{market.name}</Market>
              </>
            ),
          )}
        </MarketsContainer>
      </Separation>
      <Separator />
      <Separation>
        <SeparationTitle bottom="20">Eco - Score: </SeparationTitle>
        {product.eco_score !== null ? (
          <Score>{product.eco_score}</Score>
        ) : (
          <Score>No hay información.</Score>
        )}
      </Separation>
      <Ean>EAN: {product.ean}</Ean>
    </ScrollContainer>
  );
};

export default Product;
