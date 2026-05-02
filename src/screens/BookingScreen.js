import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

export default function AgendamentoScreen() {
  return (
    <View style={styles.container}>
      
      {/* TOPO */}
      <View style={styles.header}>
        <Image
          source={require('../assets/back.png')}
          style={styles.back}
        />
        <Text style={styles.title}>Fazer uma reserva</Text>
      </View>

      {/* CALENDÁRIO (IMAGEM) */}
      <Image
        source={require('../assets/calendario.png')}
        style={styles.calendar}
      />

      {/* HORÁRIOS */}
      <Text style={styles.label}>Horário</Text>

      <View style={styles.times}>
        {['09:00', '09:30', '10:00', '10:30'].map((hora, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.time, hora === '09:30' && styles.active]}
          >
            <Text style={hora === '09:30' ? styles.activeText : styles.timeText}>
              {hora}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* SERVIÇO */}
      <View style={styles.card}>
        <Text>Consulta Dr. Alberto Souza</Text>
        <Text style={styles.price}>R$ 300,00</Text>
      </View>

      {/* BOTÃO */}
      <TouchableOpacity style={styles.confirm}>
        <Text style={styles.confirmText}>Confirmar reserva</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  back: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  title: {
    fontSize: 18,
    color: '#5cc6ba',
    fontWeight: 'bold',
  },

  calendar: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginVertical: 10,
  },

  label: {
    marginTop: 10,
    fontWeight: '600',
  },

  times: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },

  time: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },

  active: {
    backgroundColor: '#5cc6ba',
  },

  timeText: {
    color: '#333',
  },

  activeText: {
    color: '#fff',
  },

  card: {
    marginTop: 20,
  },

  price: {
    color: '#5cc6ba',
    marginTop: 5,
  },

  confirm: {
    marginTop: 30,
    backgroundColor: '#5cc6ba',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  confirmText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});