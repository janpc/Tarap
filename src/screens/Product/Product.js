import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View } from 'react-native';

import { useCustomBackNavigation } from '../../navigation';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 20,
  },
});

const Product = ({ route }) => {
  useCustomBackNavigation();
  const product = route.params;
  console.log(product);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{
          width: 100,
          height: 100,
        }}
        source={{
          uri: product.image,
        }}
      />
      <View>
      <Text>{product.name}</Text>
      <Text>{product.brand.name}</Text>
      <Text>Is verified: {product.verified}</Text>
      {product.categories.map((category, index) => <Text key={`category-${index}`} >{category}</Text>)}
      {product.certified_labels.map(label =>
      <Image
        key={label.id}
        style={{
          width: 100,
          height: 100,
        }}
        source={{
          uri: label.image,
        }}
        alt={label.name}
      />)}
      </View>
      <View>
        <Text>Envase: {product.sustainable_indicator}</Text>
        {productcomponents.map(component => <Text key={component.id} >{component.name}</Text>)}
      </View>
    </SafeAreaView>
  );
};

export default Product;
