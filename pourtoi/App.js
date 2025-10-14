import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { enableScreens } from 'react-native-screens';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

// Screens
import CatalogueScreen from './src/screens/CatalogueScreen';
import ProductDetail from './src/screens/ProductDetail';
import CollectionScreen from './src/screens/CollectionScreen';
import CartScreen from './src/screens/CartScreen';
import AccountScreen from './src/screens/AccountScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import AboutScreen from './src/screens/AboutScreen';
import TermsScreen from './src/screens/TermsScreen';
import FAQScreen from './src/screens/FAQScreen';
import CustomerServiceScreen from './src/screens/CustomerServiceScreen';
import MeasurementsScreen from './src/screens/MeasurementsScreen';
import CalibrationScreen from './src/screens/CalibrationScreen';
import RefinementScreen from './src/screens/RefinementScreen';
import FitFeedbackScreen from './src/screens/FitFeedbackScreen';
import Checkout from './src/screens/Checkout';

// Contexts
import { CollectionProvider } from './src/context/CollectionContext';
import { CartProvider } from './src/context/CartContext';
import { UserProfileProvider } from './src/context/UserProfileContext';

// Theme
import { COLORS } from './src/theme';

// Custom Drawer
import CustomDrawer from './src/components/CustomDrawer';

enableScreens();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Catalogue" component={CatalogueScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          DrunkenHour: require('./assets/fonts/DrunkenHour.ttf'),
        });
        if (mounted) setFontsLoaded(true);
      } catch (err) {
        console.warn('Font load error', err);
      }
    };
    loadFonts();
    return () => { mounted = false; };
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Loading fonts…</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <CollectionProvider>
      <CartProvider>
        <UserProfileProvider>
          <NavigationContainer>
            <Drawer.Navigator
              initialRouteName="Catalogue"
              drawerContent={(props) => <CustomDrawer {...props} />}
              screenOptions={{
                headerShown: false,
                drawerStyle: { backgroundColor: COLORS.BG, width: 260 },
                drawerLabelStyle: {
                  fontFamily: 'DrunkenHour',
                  fontSize: 16,
                  letterSpacing: 1,
                  color: COLORS.TEXT,
                },
              }}
            >
              <Drawer.Screen name="Catalogue" component={MainStack} />
              <Drawer.Screen name="Collection" component={CollectionScreen} />
              <Drawer.Screen name="Cart" component={CartScreen} />
              <Drawer.Screen name="Account" component={AccountScreen} />
              <Drawer.Screen name="Orders" component={OrdersScreen} />
              <Drawer.Screen name="About Us" component={AboutScreen} />
              <Drawer.Screen name="Terms & Conditions" component={TermsScreen} />
              <Drawer.Screen name="FAQ" component={FAQScreen} />
              <Drawer.Screen name="Customer Service" component={CustomerServiceScreen} />
              <Drawer.Screen name="Measurements" component={MeasurementsScreen} />
              <Drawer.Screen name="Calibration" component={CalibrationScreen} />
              <Drawer.Screen name="Refinement" component={RefinementScreen} />
              <Drawer.Screen name="FitFeedback" component={FitFeedbackScreen} />
            </Drawer.Navigator>
            <StatusBar style="auto" />
          </NavigationContainer>
        </UserProfileProvider>
      </CartProvider>
    </CollectionProvider>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS?.BG || '#fff',
  },
  loadingText: {
    color: COLORS?.MUTED || '#666',
    fontSize: 16,
  },
});