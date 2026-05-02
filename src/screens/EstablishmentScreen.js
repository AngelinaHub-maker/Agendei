import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default function EstabelecimentoScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      
      {/* SETA VOLTAR */}
      <TouchableOpacity style={styles.backButton}>
        <Image
          source={require('../assets/back.png')}
          style={styles.back}
        />
      </TouchableOpacity>

      {/* FOTO DA CLÍNICA */}
      <Image
        source={require('../assets/clinica.jpg')}
        style={styles.image}
      />

      {/* INFORMAÇÕES */}
      <View style={styles.info}>
        <Text style={styles.name}>Clínica Médica São Remo</Text>
        <Text style={styles.address}>
          Av. Nove de Julho, 854{"\n"}Centro - São Paulo
        </Text>
      </View>

      {/* SERVIÇOS */}
      <Text style={styles.sectionTitle}>Serviços</Text>

      {[
        { nome: 'Consulta Dr. Alberto Souza', preco: 'R$ 300,00' },
        { nome: 'Consulta Dra. Maria Alice', preco: 'R$ 450,00' },
        { nome: 'Exame Mamografia', preco: 'R$ 620,00' },
        { nome: 'Exame Ultrassom', preco: 'R$ 270,00' },
      ].map((item, index) => (
        <View key={index} style={styles.service}>
          <View>
            <Text style={styles.serviceName}>{item.nome}</Text>
            <Text style={styles.price}>{item.preco}</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Agendamento')}
          >
            <Text style={styles.buttonText}>Agendar</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  backButton: {
    position: 'absolute',
    top: 40,
    left: 15,
    zIndex: 1,
  },

  back: {
    width: 25,
    height: 25,
  },

  image: {
    width: '100%',
    height: 180,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  info: {
    padding: 15,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  address: {
    color: '#777',
    marginTop: 5,
  },

  sectionTitle: {
    color: '#5cc6ba',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
  },

  service: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  serviceName: {
    fontSize: 14,
  },

  price: {
    color: '#5cc6ba',
    marginTop: 3,
  },

  button: {
    backgroundColor: '#5cc6ba',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
  },
});