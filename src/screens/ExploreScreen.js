import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import { establishments } from '../data/mockData';

export default function ExploreScreen({ navigation }) {
  const [search, setSearch] = useState('');

  const filtered = establishments.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>

        <View style={styles.headerText}>
          <Text style={styles.title}>Explorar</Text>
          <Text style={styles.subtitle}>Médico</Text>
        </View>
      </View>

      {/* BUSCA */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Pesquisar"
          value={search}
          onChangeText={setSearch}
          style={styles.input}
          placeholderTextColor="#999"
        />
      </View>

      {/* LISTA */}
      <ScrollView>
        {filtered.map((item) => (
          <TouchableOpacity key={item.id} style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.address}>{item.address}</Text>
            <Text style={styles.phone}>(11) 0000-0000</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* RODAPÉ */}
     <View style={styles.tabBar}>
  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
    <Image source={require('../../assets/home.png')} style={styles.icon} />
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
    <Image source={require('../../assets/search.png')} style={styles.iconActive} />
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('Reservas')}>
    <Image source={require('../../assets/calendar.png')} style={styles.icon} />
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
    <Image source={require('../../assets/user.png')} style={styles.icon} />
  </TouchableOpacity>
</View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    paddingBottom: 10,
  },

 back: {
  fontSize: 22,
  color: '#5cc6ba',
  fontWeight: 'bold',
},

  headerText: {
    flex: 1,
    alignItems: 'center',
    marginRight: 24, // compensa a seta
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5cc6ba',
  },

  subtitle: {
    fontSize: 13,
    color: '#777',
  },

  searchBox: {
    backgroundColor: '#fff',
    padding: 10,
  },

  input: {
    backgroundColor: '#eee',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
  },

  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },

  name: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },

  address: {
    fontSize: 13,
    color: '#777',
    marginTop: 2,
  },

  phone: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 2,
  },

  tabBar: {
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