import LoveCalculator from './src';
import { StyleSheet, View } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}> 
      <LoveCalculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
