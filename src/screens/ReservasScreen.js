import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import { bookings } from '../data/mockData';

export default function ReservasScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Minhas Reservas</Text>

      <ScrollView>
        {bookings.map((item) => (
          <View key={item.id} style={styles.card}>

            <Text style={styles.service}>
              {item.service}
            </Text>

            <Text style={styles.establishment}>
              {item.establishment}
            </Text>

            {/* DATA E HORA */}
            <View style={styles.row}>
              <View style={styles.info}>
                <Image source={require('../../assets/calendar.png')} style={styles.icon} />
                <Text style={styles.text}>{item.date}</Text>
              </View>

              <View style={styles.info}>
                <Image source={require('../../assets/clock.png')} style={styles.icon} />
                <Text style={styles.text}>{item.hour}</Text>
              </View>
            </View>

            {/* VALOR */}
            <View style={styles.info}>
              <Image source={require('../../assets/valor.png')} style={styles.icon} />
              <Text style={styles.text}>R$ 350,00</Text>
            </View>

            {/* ENDEREÇO */}
            <View style={styles.info}>
              <Image source={require('../../assets/pin.png')} style={styles.icon} />
              <Text style={styles.text}>
                Av. Nove de Julho, 854{'\n'}Centro - São Paulo
              </Text>
            </View>

            {/* BOTÕES */}
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.btnPrimary}>
                <Text style={styles.btnText}>Reagendar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnDanger}>
                <Text style={styles.btnText}>Excluir Reserva</Text>
              </TouchableOpacity>
            </View>

          </View>
        ))}

        <View style={{ height: 80 }} />
      </ScrollView>

      {/* RODAPÉ */}
      <View style={styles.tabBar}>
        <Image source={require('../../assets/home.png')} style={styles.tabIcon} />
        <Image source={require('../../assets/search.png')} style={styles.tabIcon} />
        <Image source={require('../../assets/calendar.png')} style={styles.tabIconActive} />
        <Image source={require('../../assets/user.png')} style={styles.tabIcon} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7f6',
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5cc6ba',
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 15,
    marginBottom: 15,
  },

  service: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  establishment: {
    color: '#777',
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  icon: {
    width: 18,
    height: 18,
    marginRight: 8,
  },

  text: {
    color: '#555',
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  btnPrimary: {
    backgroundColor: '#5cc6ba',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },

  btnDanger: {
    backgroundColor: '#e0554a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  tabBar: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  tabIcon: {
    width: 24,
    height: 24,
    opacity: 0.5,
  },

  tabIconActive: {
    width: 24,
    height: 24,
    tintColor: '#5cc6ba',
  },
});