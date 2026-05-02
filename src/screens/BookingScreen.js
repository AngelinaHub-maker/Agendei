import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

export default function BookingScreen({
  route,
  navigation,
}) {
  const { establishment, service } = route.params;

  const [selectedHour, setSelectedHour] = useState(null);

  const hours = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
  ];

  function handleBooking() {
    if (!selectedHour) {
      Alert.alert(
        'Selecione um horário',
        'Escolha um horário para continuar.'
      );

      return;
    }

    Alert.alert(
      'Agendamento Confirmado 🎉',
      `Seu horário foi marcado às ${selectedHour}`
    );

    navigation.navigate('Reservas');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Fazer Reserva
        </Text>

        <Text style={styles.subtitle}>
          Escolha o melhor horário
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>
          Estabelecimento
        </Text>

        <Text style={styles.value}>
          {establishment.name}
        </Text>

        <Text style={styles.label}>
          Serviço
        </Text>

        <Text style={styles.value}>
          {service.name}
        </Text>

        <Text style={styles.label}>
          Valor
        </Text>

        <Text style={styles.price}>
          {service.price}
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        Horários disponíveis
      </Text>

      <View style={styles.hoursContainer}>
        {hours.map((hour) => (
          <TouchableOpacity
            key={hour}
            style={[
              styles.hourButton,
              selectedHour === hour &&
                styles.hourButtonSelected,
            ]}
            onPress={() => setSelectedHour(hour)}
          >
            <Text
              style={[
                styles.hourText,
                selectedHour === hour &&
                  styles.hourTextSelected,
              ]}
            >
              {hour}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={handleBooking}
      >
        <Text style={styles.confirmButtonText}>
          Confirmar Reserva
        </Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
    </ScrollView>
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
    marginBottom: 30,
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

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 22,
    marginBottom: 35,

    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 4,
  },

  label: {
    fontSize: 14,
    color: '#888',
    marginTop: 15,
  },

  value: {
    marginTop: 6,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },

  price: {
    marginTop: 6,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5cc6ba',
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 20,
  },

  hoursContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  hourButton: {
    width: '30%',
    height: 60,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },

  hourButtonSelected: {
    backgroundColor: '#5cc6ba',
  },

  hourText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#444',
  },

  hourTextSelected: {
    color: '#ffffff',
  },

  confirmButton: {
    marginTop: 25,
    height: 60,
    backgroundColor: '#5cc6ba',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  confirmButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});