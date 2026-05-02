import React from 'react';

import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';

import ReservasScreen from '../screens/ReservasScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EstabelecimentoScreen from '../screens/EstabelecimentoScreen';
import AgendamentoScreen from '../screens/AgendamentoScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Tabs() {
  return (
    < Tab.Navigator screenOptions={{ headerShown: false,  tabBarShowLabel: false, }}>
      <Tab.Screen
  name="Home"
  component={HomeScreen}
  options={{
    tabBarIcon: () => (
      <Image
        source={require('../../assets/icons/home.png')}
        style={{ width: 24, height: 24 }}
      />
    ),
  }}
/>
     <Tab.Screen
name="Explorar"
component={ExploreScreen}
  options={{
    tabBarIcon: () => (
      <Image
        source={require('../../assets/icons/search.png')}
        style={{ width: 24, height: 24 }}
      />
    ),
  }}
/>

    <Tab.Screen
name="Reservas"
component={ReservasScreen}
  options={{
    tabBarIcon: () => (
      <Image
        source={require('../../assets/icons/calendar.png')}
        style={{ width: 24, height: 24 }}
      />
    ),
  }}
/>

      <Tab.Screen
  name="Perfil"
component={ProfileScreen}
  options={{
    tabBarIcon: () => (
      <Image
        source={require('../../assets/icons/user.png')}
        style={{ width: 24, height: 24 }}
      />
    ),
  }}
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
        name="Estabelecimento"
        component={EstabelecimentoScreen}
      />

      <Stack.Screen
        name="Agendamento"
        component={AgendamentoScreen}
      />
    </Stack.Navigator>
  );
}

