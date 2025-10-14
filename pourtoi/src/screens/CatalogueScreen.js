import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const products = [
  { id: '071', name: 'JACKET 白い — E5', price: '$1,199', imageUri: 'https://via.placeholder.com/300x400?text=Jacket' },
  { id: '008', name: 'GLOVES グレー — E1', price: '$299', imageUri: 'https://via.placeholder.com/300x400?text=Gloves' },
  { id: '005', name: 'ULTRASENSE グレー — D8', price: '$1,199', imageUri: 'https://via.placeholder.com/300x400?text=Sneakers' },
  { id: '115', name: 'PANTS グレー — 14', price: '$899', imageUri: 'https://via.placeholder.com/300x400?text=Pants' },
];

export default function CatalogueScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetail', { id: item.id })}>
      <Image source={{ uri: item.imageUri }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catalogue</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: '600', textAlign: 'center', marginBottom: 12 },
  list: { paddingBottom: 24 },
  card: { backgroundColor: '#f7f7f7', borderRadius: 10, overflow: 'hidden', marginBottom: 12 },
  image: { width: '100%', height: 220, backgroundColor: '#eee' },
  info: { padding: 12 },
  name: { fontSize: 16, fontWeight: '600', marginBottom: 6 },
  price: { fontSize: 14, color: '#444' },
});