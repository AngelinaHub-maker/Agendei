import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <Text style={styles.title}>Meu Perfil</Text>

      {/* INFO */}
      <View style={styles.card}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.value}>Hebert Stein Mazutti</Text>

        <Text style={styles.label}>E-mail</Text>
        <Text style={styles.value}>heber@9coders.com.br</Text>
      </View>

      {/* RODAPÉ */}
      <View style={styles.tabBar}>
        <Image source={require('../../assets/home.png')} style={styles.icon} />
        <Image source={require('../../assets/search.png')} style={styles.icon} />
        <Image source={require('../../assets/calendar.png')} style={styles.icon} />
        <Image source={require('../../assets/user.png')} style={styles.iconActive} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7f6',
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5cc6ba',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 20,
  },

  label: {
    fontSize: 13,
    color: '#777',
    marginTop: 10,
  },

  value: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },

  tabBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  icon: {
    width: 24,
    height: 24,
    opacity: 0.5,
  },

  iconActive: {
    width: 24,
    height: 24,
    tintColor: '#5cc6ba',
  },
});