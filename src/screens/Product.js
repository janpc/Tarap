import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 20,
  },
});

const Product = ({ route }) => {
  const { type, code } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text>{`Type: ${type}`}</Text>
      <Text>{`Data: ${code}`}</Text>
    </SafeAreaView>
  );
};

export default Product;
