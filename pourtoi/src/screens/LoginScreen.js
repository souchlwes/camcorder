import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { COLORS, TYPO, SPACING } from '../theme';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.brand}>Pourtoi</Text>
        <Text style={styles.tag}>Your wardrobe, reimagined</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="you@domain.com"
          placeholderTextColor={COLORS.MUTED}
          style={styles.input}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="••••••••"
          placeholderTextColor={COLORS.MUTED}
          style={styles.input}
        />

        <TouchableOpacity style={styles.primary} onPress={() => navigation.replace('Catalogue')}>
          <Text style={styles.primaryText}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkRow} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.linkText}>Create an account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ghost} onPress={() => navigation.replace('Catalogue')}>
          <Text style={styles.ghostText}>Continue as guest</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>By continuing you agree to our Terms and Privacy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG,
    paddingHorizontal: SPACING.unit,
    paddingTop: Platform.OS === 'ios' ? 64 : 36,
    justifyContent: 'space-between',
  },
  hero: { alignItems: 'center', marginTop: SPACING.large / 2 },
  brand: { fontFamily: TYPO.DISPLAY, fontSize: 48, lineHeight: 52, color: COLORS.TEXT },
  tag: { marginTop: 8, fontFamily: TYPO.UI, fontSize: 14, color: COLORS.MUTED },
  form: { marginTop: SPACING.large },
  label: { fontFamily: TYPO.UI, fontSize: 13, color: COLORS.MUTED, marginBottom: 6 },
  input: { backgroundColor: COLORS.SURFACE, paddingHorizontal: 14, paddingVertical: 12, borderRadius: 10, fontFamily: TYPO.UI, color: COLORS.TEXT, marginBottom: SPACING.small },
  primary: { marginTop: SPACING.unit, backgroundColor: COLORS.ACCENT, paddingVertical: 14, borderRadius: 12, alignItems: 'center' },
  primaryText: { color: '#fff', fontFamily: TYPO.UI, fontWeight: '700', fontSize: 16 },
  linkRow: { marginTop: 12, alignItems: 'center' },
  linkText: { color: COLORS.TEXT, fontFamily: TYPO.UI, fontSize: 14, textDecorationLine: 'underline' },
  ghost: { marginTop: 12, alignItems: 'center', paddingVertical: 10 },
  ghostText: { color: COLORS.MUTED, fontFamily: TYPO.UI, fontSize: 13 },
  footer: { paddingVertical: SPACING.small, alignItems: 'center' },
  footerText: { fontSize: 11, color: COLORS.MUTED, fontFamily: TYPO.UI, textAlign: 'center' },
});