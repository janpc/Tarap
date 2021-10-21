import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

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
  const { type, code } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text>{`Type: ${type}`}</Text>
      <Text>{`Data: ${code}`}</Text>
    </SafeAreaView>
  );
};

export default Product;
