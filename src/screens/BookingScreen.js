import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function BookingScreen({ route, navigation }) {
  const { service, establishment } = route.params;

  const [selectedHour, setSelectedHour] = useState(null);

  const hours = ['09:00', '10:00', '14:00', '16:00'];

  return (
    <View style={styles.container}>

      {/* SETA */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>←</Text>
      </TouchableOpacity>

      {/* TÍTULO */}
      <Text style={styles.title}>Agendamento</Text>

      {/* CALENDÁRIO (IMAGEM) */}
      <Image
        source={require('../../assets/calendario.png')}
        style={styles.calendar}
      />

      {/* INFO */}
      <Text style={styles.service}>{service.name}</Text>
      <Text style={styles.establishment}>{establishment.name}</Text>

      {/* HORÁRIOS */}
      <Text style={styles.section}>Horários disponíveis</Text>

      <View style={styles.hoursContainer}>
        {hours.map((hour) => (
          <TouchableOpacity
            key={hour}
            style={[
              styles.hourBox,
              selectedHour === hour && styles.hourSelected
            ]}
            onPress={() => setSelectedHour(hour)}
          >
            <Text
              style={
                selectedHour === hour
                  ? styles.hourTextSelected
                  : styles.hourText
              }
            >
              {hour}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* BOTÃO */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7f6',
    padding: 20,
    paddingTop: 50,
  },

  back: {
    fontSize: 24,
    marginBottom: 10,
  },

  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5cc6ba',
    marginBottom: 20,
  },

  calendar: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  service: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  establishment: {
    color: '#777',
    marginBottom: 15,
  },

  section: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',

  },

  hoursContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },

  hourBox: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },

  hourSelected: {
    backgroundColor: '#5cc6ba',
  },

  hourText: {
    color: '#333',
  },

  hourTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },

  button: {
    marginTop: 30,
    backgroundColor: '#5cc6ba',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});