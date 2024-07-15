import React from 'react';
import { StyleSheet, Dimensions, useWindowDimensions, View } from 'react-native';

enum Document {
  RULES = 1,
  RED_BOOK,
  ENVIRONMENT,
  PROTECTED_TERRITORIES,
}

export default function DocumentOpener() {
  return <View></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
