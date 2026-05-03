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
              <Image source={require('../../assets/money.png')} style={styles.icon} />
              <Text style={styles.text}>R$ 350,00</Text>
            </View>

            {/* ENDEREÇO */}
            <View style={styles.info}>
              <Image source={require('../../assets/location.png')} style={styles.icon} />
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