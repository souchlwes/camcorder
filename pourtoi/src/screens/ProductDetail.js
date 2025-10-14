import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProductDetail({ route }) {
  const { id } = route.params || {};
  const product = {
    id,
    name: 'Sample Product',
    price: '$999',
    imageUri: 'https://via.placeholder.com/400x500?text=Product',
    description: 'This is a placeholder product description.',
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUri }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.desc}>{product.description}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  image: { width: '100%', height: 300, marginBottom: 16, backgroundColor: '#eee' },
  name: { fontSize: 20, fontWeight: '600', marginBottom: 8 },
  price: { fontSize: 18, color: '#444', marginBottom: 12 },
  desc: { fontSize: 14, color: '#666', marginBottom: 20 },
  button: { backgroundColor: '#111', padding: 12, borderRadius: 6 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '600' },
});