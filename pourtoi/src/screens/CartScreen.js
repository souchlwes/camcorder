import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext';
import { COLORS, TYPO, SPACING } from '../theme';

export default function CartScreen({ navigation }) {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MY CART</Text>

      {cart.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={item.image} style={styles.image} resizeMode="contain" />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                  <Text style={styles.remove}>REMOVE</Text>
                </TouchableOpacity>
              </View>
            )}
          />

          <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('Checkout', { product: cart[0] })}>
            <Text style={styles.checkoutText}>PROCEED TO CHECKOUT</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
            <Text style={styles.clearText}>CLEAR CART</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG,
    padding: SPACING.large,
  },
  title: {
    fontFamily: TYPO.DISPLAY,
    fontSize: 22,
    letterSpacing: 2,
    textAlign: 'center',
    marginBottom: SPACING.large * 2,
    color: COLORS.TEXT,
  },
  empty: {
    textAlign: 'center',
    color: COLORS.MUTED,
    fontSize: 14,
    marginTop: SPACING.large * 2,
  },
  card: {
    alignItems: 'center',
    marginBottom: SPACING.large * 2,
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: SPACING.small,
  },
  name: {
    fontFamily: TYPO.UI,
    fontSize: 16,
    color: COLORS.TEXT,
  },
  price: {
    fontSize: 14,
    color: COLORS.MUTED,
    marginBottom: SPACING.small,
  },
  remove: {
    color: COLORS.ACCENT,
    fontWeight: 'bold',
    marginTop: SPACING.small,
  },
  checkoutButton: {
    backgroundColor: COLORS.ACCENT,
    paddingVertical: SPACING.small,
    borderRadius: 4,
    marginTop: SPACING.large,
  },
  checkoutText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  clearButton: {
    marginTop: SPACING.small,
    paddingVertical: SPACING.small,
  },
  clearText: {
    textAlign: 'center',
    color: COLORS.MUTED,
    fontSize: 14,
    letterSpacing: 1,
  },
});