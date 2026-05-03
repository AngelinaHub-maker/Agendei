import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            A
          </Text>
        </View>

        <Text style={styles.name}>
          Angelina Freitas
        </Text>

        <Text style={styles.email}>
          angelina@email.com
        </Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.optionCard}>
          <Text style={styles.optionIcon}>
            👤
          </Text>

          <View>
            <Text style={styles.optionTitle}>
              Editar Perfil
            </Text>

            <Text style={styles.optionSubtitle}>
              Atualize suas informações
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard}>
          <Text style={styles.optionIcon}>
            🔔
          </Text>

          <View>
            <Text style={styles.optionTitle}>
              Notificações
            </Text>

            <Text style={styles.optionSubtitle}>
              Gerencie seus alertas
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard}>
          <Text style={styles.optionIcon}>
            💳
          </Text>

          <View>
            <Text style={styles.optionTitle}>
              Pagamentos
            </Text>

            <Text style={styles.optionSubtitle}>
              Métodos e cartões
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard}>
          <Text style={styles.optionIcon}>
            📞
          </Text>

          <View>
            <Text style={styles.optionTitle}>
              Suporte
            </Text>

            <Text style={styles.optionSubtitle}>
              Precisa de ajuda?
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>
          Sair da Conta
        </Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafa',
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 60,
    alignItems: 'center',
    marginBottom: 35,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#5cc6ba',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 4,
  },

  avatarText: {
    fontSize: 42,
    color: '#ffffff',
    fontWeight: 'bold',
  },

  name: {
    marginTop: 20,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
  },

  email: {
    marginTop: 8,
    fontSize: 16,
    color: '#777',
  },

  section: {
    marginTop: 10,
  },

  optionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 22,
    padding: 20,
    marginBottom: 18,

    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },

  optionIcon: {
    fontSize: 28,
    marginRight: 18,
  },

  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },

  optionSubtitle: {
    marginTop: 5,
    fontSize: 14,
    color: '#777',
  },

  logoutButton: {
    marginTop: 20,
    backgroundColor: '#ff5c5c',
    height: 58,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});