import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ReservasScreen from '../screens/ReservasScreen';
import PerfilScreen from '../screens/PerfilScreen';
import EstabelecimentoScreen from '../screens/EstabelecimentoScreen';
import AgendamentoScreen from '../screens/AgendamentoScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explorar" component={ExploreScreen} />
      <Tab.Screen name="Reservas" component={ReservasScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}


export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={Tabs} />
        <Stack.Screen name="Estabelecimento" component={EstabelecimentoScreen} />
        <Stack.Screen name="Agendamento" component={AgendamentoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

