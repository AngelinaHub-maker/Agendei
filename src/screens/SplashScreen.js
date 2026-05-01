import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

    return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#5cc6ba" />

      <View style={styles.logoContainer}>
        <View style={styles.circle}>
          <Text style={styles.logoText}>A</Text>
        </View>

        <Text style={styles.title}>Agendei</Text>
        <Text style={styles.subtitle}>
          Seu app de agendamentos
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5cc6ba',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoContainer: {
    alignItems: 'center',
  },

  circle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },

  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#5cc6ba',
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#eaf8f6',
  },
});