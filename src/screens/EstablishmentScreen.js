import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function EstablishmentScreen({ route, navigation }) {
  const { establishment } = route.params;

  return (
    <View style={styles.container}>

      {/* HEADER COM SETA */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
<Image
  source={require('../../assets/clinica.png')}
  style={styles.image}
/>

        {/* INFO */}
        <View style={styles.content}>
          <Text style={styles.name}>
            {establishment.name}
          </Text>

          <Text style={styles.address}>
            {establishment.address}
          </Text>

          {/* SERVIÇOS */}
          <Text style={styles.sectionTitle}>
            Serviços
          </Text>

          {establishment.services?.map((service) => (
            <View key={service.id} style={styles.serviceItem}>
              <View>
                <Text style={styles.serviceName}>
                  {service.name}
                </Text>
                <Text style={styles.servicePrice}>
                  {service.price}
                </Text>
              </View>

              <TouchableOpacity style={styles.buttonSmall}>
                <Text style={styles.buttonText}>Agendar</Text>
              </TouchableOpacity>
            </View>
          ))}

        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7f6',
  },

  header: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },

  back: {
    fontSize: 24,
    color: '#fff', // branco pq fica em cima da imagem
    fontWeight: 'bold',
  },

  content: {
    backgroundColor: '#fff',
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },

  imagePlaceholder: {
  height: 220,
  backgroundColor: '#ddd', // cinza mais neutro
  justifyContent: 'center',
  alignItems: 'center',
},

imageText: {
  color: '#555',
},

  address: {
    marginTop: 6,
    color: '#777',
  },

  sectionTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },

  serviceItem: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  serviceName: {
    fontSize: 15,
    fontWeight: '600',
  },

  servicePrice: {
    color: '#5cc6ba',
    marginTop: 4,
  },

  buttonSmall: {
    backgroundColor: '#5cc6ba',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});