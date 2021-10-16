import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';

import colors from '../constants/colors';
import { ListItem, ListSeparator } from '../components/List';
import TabBar from '../components/TabBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 20,
  },
});

const screens = [
  {
    title: 'Text',
    subtitle: 'An example of using the Text.js components.',
    target: 'Scanner',
  },
  {
    title: 'Form',
    subtitle: 'An example of using the Form.js components.',
    target: 'FormDemo',
  },
  {
    title: 'Button',
    subtitle: 'An example of using the Button.js components.',
    target: 'ButtonDemo',
  },
  {
    title: 'Scanner',
    subtitle: 'Scan Barcodes',
    target: 'Scanner',
  },
];

export const List = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.container}
        data={screens}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.subtitle}
            onPress={() => navigation.push(item.target)}
          />
        )}
        ItemSeparatorComponent={ListSeparator}
        ListHeaderComponent={ListSeparator}
        ListFooterComponent={ListSeparator}
      />
    </SafeAreaView>
  );
};
