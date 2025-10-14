import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, TYPO, SPACING } from '../theme';

export default function Checkout({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>CHECKOUT</Text>

      {/* Product Summary */}
      <View style={styles.summary}>
        <Text style={styles.label}>ITEM</Text>
        <Text style={styles.value}>{product.name}</Text>
      </View>

      <View style={styles.summary}>
        <Text style={styles.label}>CODE</Text>
        <Text style={styles.value}>{product.id}</Text>
      </View>

      <View style={styles.summary}>
        <Text style={styles.label}>PRICE</Text>
        <Text style={styles.value}>{product.price}</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Total */}
      <View style={styles.summary}>
        <Text style={styles.totalLabel}>TOTAL</Text>
        <Text style={styles.totalValue}>{product.price}</Text>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton} onPress={() => console.log('Order confirmed')}>
        <Text style={styles.confirmText}>CONFIRM PURCHASE</Text>
      </TouchableOpacity>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>BACK TO CATALOGUE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG,
    padding: SPACING.large,
    justifyContent: 'center',
  },
  title: {
    fontFamily: TYPO.DISPLAY,
    fontSize: 22,
    letterSpacing: 2,
    textAlign: 'center',
    marginBottom: SPACING.large * 2,
    color: COLORS.TEXT,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.small,
  },
  label: {
    fontSize: 14,
    color: COLORS.MUTED,
    letterSpacing: 1,
  },
  value: {
    fontSize: 16,
    fontFamily: TYPO.UI,
    color: COLORS.TEXT,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.SURFACE,
    marginVertical: SPACING.large,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: COLORS.TEXT,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.TEXT,
  },
  confirmButton: {
    backgroundColor: COLORS.ACCENT,
    paddingVertical: SPACING.small,
    borderRadius: 4,
    marginTop: SPACING.large,
  },
  confirmText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  backButton: {
    marginTop: SPACING.large,
    paddingVertical: SPACING.small,
  },
  backText: {
    textAlign: 'center',
    color: COLORS.MUTED,
    fontSize: 14,
    letterSpacing: 1,
  },
});