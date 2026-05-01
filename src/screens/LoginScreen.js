import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
       <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.subtitle}>
          Faça login para continuar
        </Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>E-mail</Text>

        <TextInput
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Senha</Text>

         <TextInput
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace('Main')}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.registerText}>
            Criar uma conta
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    );
}
   const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 25,
    justifyContent: 'center',
  },

  header: {
    marginBottom: 40,
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#777',
  },

   form: {
    width: '100%',
  },

  label: {
    fontSize: 15,
    color: '#555',
    marginBottom: 8,
    marginTop: 15,
  },

  input: {
    width: '100%',
    height: 58,
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    paddingHorizontal: 18,
    fontSize: 16,
  },
 
  button: {
    width: '100%',
    height: 58,
    backgroundColor: '#5cc6ba',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  registerText: {
    textAlign: 'center',
    marginTop: 25,
    color: '#5cc6ba',
    fontWeight: '600',
  },
});  