import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RefinementScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Refinement Screen Placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 18 }
});