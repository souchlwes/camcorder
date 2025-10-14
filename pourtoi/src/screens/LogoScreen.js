import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function LogoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="zoomIn"
        duration={2000}
        source={require('../../assets/pourtois.png')} // ✅ corrected path
        style={styles.logo}
        resizeMode="contain"
        onAnimationEnd={() => {
          navigation.replace('Login');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 220,
    height: 220,
  },
});