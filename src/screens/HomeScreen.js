import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import { categories, establishments } from '../data/mockData';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/logo4.png')}
          style={styles.logo}
        />

        <Text style={styles.subtitle}>
          Agende os seus serviços
        </Text>

        {/* BUSCA */}
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Qual cidade você está?"
            style={styles.input}
            placeholderTextColor="#999"
          />
          <Image
            source={require('../../assets/pin.png')}
            style={styles.pin}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* CATEGORIAS */}
        <View style={styles.categories}>
          {categories.map((item) => (
            <TouchableOpacity key={item.id} style={styles.categoryCard}>
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* LISTA */}
        <View style={styles.list}>
          {establishments.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() =>
                navigation.navigate('Establishment', {
                  establishment: item,
                })
              }
            >
              <Image source={item.image} style={styles.cardImage} />

              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardAddress}>{item.address}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>

      {/* MENU INFERIOR */}
      <View style={styles.tabBar}>
        <Image source={require('../../assets/home.png')} style={styles.tabIcon} />
        <Image source={require('../../assets/search.png')} style={styles.tabIcon} />
        <Image source={require('../../assets/calendar.png')} style={styles.tabIcon} />
        <Image source={require('../../assets/user.png')} style={styles.tabIcon} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7f6',
  },

  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  logo: {
    width: 120,
    height: 40,
    marginBottom: 10,
  },

  subtitle: {
    color: '#555',
    marginBottom: 15,
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 45,
  },

  input: {
    flex: 1,
  },

  pin: {
    width: 18,
    height: 18,
  },

  categories: {
   flexDirection: 'row',
   flexWrap: 'wrap',
   paddingHorizontal: 20,
   justifyContent: 'space-between',
},

categoryCard: {
  width: '30%', // mantém 3 por linha
  backgroundColor: '#fff',
  borderRadius: 16,
  alignItems: 'center',
  paddingVertical: 15,
  marginBottom: 15,
},

  categoryImage: {
    width: 40,
    height: 40,
    marginBottom: 8,
    resizeMode: 'contain',
  },

  categoryText: {
    fontSize: 13,
    textAlign: 'center',
  },

  list: {
    paddingHorizontal: 20,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 15,
    overflow: 'hidden',
  },

  cardImage: {
    width: '100%',
    height: 140,
  },

  cardContent: {
    padding: 10,
  },

  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  cardAddress: {
    color: '#777',
    fontSize: 13,
    marginTop: 4,
  },

  tabBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderColor: '#ddd',
  },

  tabIcon: {
    width: 24,
    height: 24,
  },
});