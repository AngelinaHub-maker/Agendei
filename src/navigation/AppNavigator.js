import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';

import ReservasScreen from '../screens/ReservasScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EstablishmentScreen from '../screens/EstablishmentScreen';
import BookingScreen from '../screens/BookingScreen';
import SplashScreen from '../screens/SplashScreen';
import BookingScreen from '../screens/BookingScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="Explorar"
        component={ExploreScreen}
      />

      <Tab.Screen
        name="Reservas"
        component={ReservasScreen}
      />

      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}


export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        name="Main"
        component={Tabs}
      />

      <Stack.Screen
  name="Establishment"
  component={EstablishmentScreen}
/>

<Stack.Screen
  name="Booking"
  component={BookingScreen}
/>
    </Stack.Navigator>
  );
}

