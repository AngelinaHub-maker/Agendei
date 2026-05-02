import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
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

  <Image 
    source={require('../assets/logo.png')} 
    style={styles.logoMain}
  />
  <Image 
    source={require('../assets/loading.png')} 
    style={styles.logoOverlay}
  />

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
  logoMain: {
  width: 60,
  height: 60,
},

logoOverlay: {
  position: 'absolute',
  width: 20,
  height: 20,
  bottom: 0,
  right: 0,
}
});