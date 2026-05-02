import React, { useState } from 'react';
import {
  View,
 Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { bookings } from '../data/mockData';

export default function ReservasScreen() {
  const [reservas, setReservas] = useState(bookings);

  function cancelBooking(id) {
    Alert.alert(
      'Cancelar Reserva',
      'Deseja cancelar este agendamento?',
      [
        {
          text: 'Não',
          style: 'cancel',
        },

        {
          text: 'Sim',
          onPress: () => {
            const updatedBookings =
              reservas.filter(
                (item) => item.id !== id
              );

            setReservas(updatedBookings);
          },
        },
      ]
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Minhas Reservas
        </Text>

        <Text style={styles.subtitle}>
          Acompanhe seus agendamentos
        </Text>
      </View>

      {reservas.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            Nenhuma reserva encontrada
          </Text>
        </View>
      ) : (
        reservas.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardTop}>
              <Text style={styles.establishment}>
                {item.establishment}
              </Text>

              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>
                  Confirmado
                </Text>
              </View>
            </View>

            <Text style={styles.service}>
              {item.service}
            </Text>

            <Text style={styles.info}>
              📅 {item.date}
            </Text>

            <Text style={styles.info}>
              ⏰ {item.hour}
            </Text>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() =>
                cancelBooking(item.id)
              }
            >
              <Text style={styles.cancelButtonText}>
                Cancelar Reserva
              </Text>
            </TouchableOpacity>
          </View>
        ))
      )}

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

  emptyContainer: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 18,
    color: '#888',
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 22,
    marginBottom: 22,

    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 4,
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  establishment: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    flex: 1,
  },

  statusBadge: {
    backgroundColor: '#dff7f3',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
  },

  statusText: {
    color: '#5cc6ba',
    fontWeight: 'bold',
    fontSize: 13,
  },

  service: {
    marginTop: 14,
    fontSize: 17,
    color: '#555',
    fontWeight: '600',
  },

  info: {
    marginTop: 10,
    fontSize: 15,
    color: '#666',
  },

  cancelButton: {
    marginTop: 24,
    backgroundColor: '#ff5c5c',
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cancelButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});