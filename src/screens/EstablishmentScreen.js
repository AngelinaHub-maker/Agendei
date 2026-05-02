import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function EstablishmentScreen({
  route,
  navigation,
}) {
  const { establishment } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.imageText}>
          Clínica
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          {establishment.name}
        </Text>

        <Text style={styles.category}>
          {establishment.category}
        </Text>

        <Text style={styles.address}>
          📍 {establishment.address}
        </Text>

        <Text style={styles.rating}>
          ⭐ {establishment.rating}
        </Text>

        <Text style={styles.sectionTitle}>
          Serviços disponíveis
        </Text>

        {establishment.services.map((service) => (
          <View key={service.id} style={styles.serviceCard}>
            <View>
              <Text style={styles.serviceName}>
                {service.name}
              </Text>

              <Text style={styles.servicePrice}>
                {service.price}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
               navigation.navigate('Agendamento', {
                  establishment,
                  service,
                })
              }
            >
              <Text style={styles.buttonText}>
                Agendar
              </Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={{ height: 40 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafa',
  },

  imageContainer: {
    height: 260,
    backgroundColor: '#5cc6ba',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageText: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: 'bold',
  },

  content: {
    padding: 22,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
  },

  category: {
    marginTop: 10,
    fontSize: 17,
    color: '#5cc6ba',
    fontWeight: '600',
  },

  address: {
    marginTop: 12,
    fontSize: 15,
    color: '#666',
  },

  rating: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
  },

  sectionTitle: {
    marginTop: 35,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
  },

  serviceCard: {
    backgroundColor: '#ffffff',
    borderRadius: 22,
    padding: 18,
    marginBottom: 18,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 3,
  },

  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },

  servicePrice: {
    marginTop: 8,
    fontSize: 15,
    color: '#5cc6ba',
    fontWeight: '600',
  },

  button: {
    backgroundColor: '#5cc6ba',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 14,
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});