import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CustomerServiceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Customer Service Screen Placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 18 }
});