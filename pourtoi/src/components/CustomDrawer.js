import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { COLORS, TYPO, SPACING } from '../theme';

export default function CustomDrawer(props) {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.BG }}>
      {/* Header with logo */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/pourtois.png')} // your logo
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.brand}>POURTOI</Text>
      </View>

      {/* Menu items */}
      <DrawerContentScrollView {...props} contentContainerStyle={styles.scroll}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Inclusive fashion for every body</Text>
        <Text style={styles.version}>v1.0.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: SPACING.large,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.SURFACE,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: SPACING.small,
  },
  brand: {
    fontFamily: TYPO.DISPLAY,
    fontSize: 18,
    letterSpacing: 2,
    color: COLORS.TEXT,
  },
  scroll: {
    paddingTop: SPACING.large,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: COLORS.SURFACE,
    padding: SPACING.large,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: COLORS.MUTED,
    marginBottom: 4,
    textAlign: 'center',
  },
  version: {
    fontSize: 10,
    color: COLORS.MUTED,
  },
});