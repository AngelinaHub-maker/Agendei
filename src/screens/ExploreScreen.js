import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { establishments } from '../data/mockData';

export default function ExploreScreen({ navigation }) {
  const [search, setSearch] = useState('');

  const filteredEstablishments = establishments.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Explorar
        </Text>

        <Text style={styles.subtitle}>
          Encontre clínicas e profissionais
        </Text>
      </View>

      <TextInput
        placeholder="Buscar estabelecimento..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredEstablishments.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() =>
              navigation.navigate('Establishment', {
                establishment: item,
              })
            }
          >
            <View style={styles.imagePlaceholder}>
              <Text style={styles.imageText}>
                Clínica
              </Text>
            </View>

            <View style={styles.cardContent}>
              <View style={styles.row}>
                <Text style={styles.cardTitle}>
                  {item.name}
                </Text>

                <Text style={styles.rating}>
                  ⭐ {item.rating}
                </Text>
              </View>

              <Text style={styles.category}>
                {item.category}
              </Text>

              <Text style={styles.address}>
                {item.address}
              </Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  navigation.navigate('Establishment', {
                    establishment: item,
                  })
                }
              >
                <Text style={styles.buttonText}>
                  Ver detalhes
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafa',
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 60,
    marginBottom: 25,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#777',
  },

  searchInput: {
    width: '100%',
    height: 58,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    paddingHorizontal: 18,
    marginBottom: 25,

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 22,

    shadowColor: '#000',
    shadowOpacity: 0.07,
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

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },

  rating: {
    fontSize: 15,
    fontWeight: '600',
    color: '#444',
  },

  category: {
    marginTop: 8,
    color: '#5cc6ba',
    fontWeight: '600',
    fontSize: 15,
  },

  address: {
    marginTop: 6,
    color: '#777',
    fontSize: 14,
  },

  button: {
    marginTop: 18,
    backgroundColor: '#5cc6ba',
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});