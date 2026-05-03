import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* LOGO */}
      <Image
        source={require('../../assets/clinic1/logo4.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* FORM */}
      <View style={styles.form}>
        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor="#999"
        />

        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#999"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace('Main')}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Não tenho uma conta.{' '}
          <Text style={styles.link}>Toque para criar uma agora.</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  logo: {
    width: 140,
    height: 140,
    marginBottom: 40,
  },

  form: {
    width: '100%',
  },

  input: {
    width: '100%',
    height: 55,
    backgroundColor: '#f1f5f4',
    borderRadius: 14,
    paddingHorizontal: 18,
    fontSize: 15,
    marginBottom: 15,
  },

  button: {
    width: '100%',
    height: 55,
    backgroundColor: '#5cc6ba',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  footerText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#777',
  },

  link: {
    color: '#5cc6ba',
    fontWeight: '600',
  },
});