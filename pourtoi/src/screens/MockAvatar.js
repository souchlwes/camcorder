import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { COLORS, SPACING } from '../theme';

export default function MockAvatar({ route, navigation }) {
  const { product } = route.params;
  const [morph, setMorph] = useState({
    height: 170,
    chest: 90,
    waist: 75,
    hip: 95,
    sleeve: 58,
  });

  const update = (key, value) => setMorph((s) => ({ ...s, [key]: Math.round(value) }));

  return (
    <View style={styles.container}>
      <View style={styles.avatarPane}>
        <Image source={product.image} style={styles.avatarImage} />
        <View style={styles.morphSummary}>
          <Text style={styles.summaryText}>Height: {morph.height} cm</Text>
          <Text style={styles.summaryText}>Chest: {morph.chest} cm</Text>
          <Text style={styles.summaryText}>Waist: {morph.waist} cm</Text>
        </View>
      </View>

      <View style={styles.controls}>
        <Text style={styles.controlLabel}>Height</Text>
        <Slider
          minimumValue={140}
          maximumValue={210}
          value={morph.height}
          onValueChange={(v) => update('height', v)}
          minimumTrackTintColor={COLORS.ACCENT}
          maximumTrackTintColor={COLORS.MUTED}
        />
        <Text style={styles.controlLabel}>Chest</Text>
        <Slider
          minimumValue={70}
          maximumValue={140}
          value={morph.chest}
          onValueChange={(v) => update('chest', v)}
          minimumTrackTintColor={COLORS.ACCENT}
          maximumTrackTintColor={COLORS.MUTED}
        />
        <Text style={styles.controlLabel}>Waist</Text>
        <Slider
          minimumValue={50}
          maximumValue={120}
          value={morph.waist}
          onValueChange={(v) => update('waist', v)}
          minimumTrackTintColor={COLORS.ACCENT}
          maximumTrackTintColor={COLORS.MUTED}
        />
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => navigation.navigate('Checkout', { product, morph })}
        >
          <Text style={styles.nextText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.BG },
  avatarPane: { alignItems: 'center', padding: SPACING.unit },
  avatarImage: { width: 180, height: 300, borderRadius: 12 },
  morphSummary: { marginTop: SPACING.small, alignItems: 'center' },
  summaryText: { color: COLORS.MUTED },
  controls: { padding: SPACING.unit },
  controlLabel: { marginTop: SPACING.small, color: COLORS.TEXT },
  nextBtn: { marginTop: 20, backgroundColor: COLORS.ACCENT, padding: 14, borderRadius: 10, alignItems: 'center' },
  nextText: { color: '#fff', fontWeight: '700' },
});