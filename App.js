import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

import CountButton  from './src/app/components/CountButton.js';


export default function App() {
  return (
    <View style={styles.container}>
      <CountButton></CountButton>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff'
  },
});
