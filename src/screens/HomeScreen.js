import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import { categories, establishments } from '../data/mockData';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, Usuário 👋</Text>
        <Text style={styles.subtitle}>
          Encontre seu agendamento ideal
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        Categorias
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {categories.map((item) => (
          <TouchableOpacity key={item.id} style={styles.categoryCard}>
            <Image
  source={item.icon}
  style={styles.categoryImage}
/>
            <Text style={styles.categoryText}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>
        Mais populares
      </Text>

      {establishments.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() =>
            navigation.navigate('Estabelecimento', {
              estabelecimento: item,
            })
          }
        >
          <Image
  source={item.image}
  style={styles.cardImage}
/>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              {item.name}
            </Text>

            <Text style={styles.cardCategory}>
              {item.category}
            </Text>

            <Text style={styles.cardAddress}>
              {item.address}
            </Text>

            <Text style={styles.rating}>
              ⭐ {item.rating}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafa',
    paddingHorizontal: 20,
  },

  categoryImage: {
  width: 42,
  height: 42,
  resizeMode: 'contain',
  marginBottom: 10,
},

  header: {
    marginTop: 60,
    marginBottom: 30,
  },

  greeting: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#222',
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#777',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#222',
  },

  categoriesContainer: {
    marginBottom: 30,
  },

  categoryCard: {
    width: 100,
    height: 100,
    backgroundColor: '#ffffff',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,

    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },

  cardImage: {
  width: '100%',
  height: 160,
  resizeMode: 'cover',
},

  categoryIcon: {
    fontSize: 30,
    marginBottom: 10,
  },

  categoryText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#444',
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    marginBottom: 22,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },

  imagePlaceholder: {
    height: 160,
    backgroundColor: '#5cc6ba',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  cardContent: {
    padding: 18,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },

  cardCategory: {
    marginTop: 8,
    fontSize: 15,
    color: '#5cc6ba',
    fontWeight: '600',
  },

  cardAddress: {
    marginTop: 6,
    fontSize: 14,
    color: '#777',
  },

  rating: {
    marginTop: 12,
    fontSize: 15,
    fontWeight: '600',
    color: '#444',
  },
});