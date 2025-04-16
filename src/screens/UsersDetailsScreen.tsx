import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export const UserDetailsScreen = ({ route }: any) => {
  const { user } = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Основная информация</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Имя:</Text>
            <Text style={styles.value}>{user.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{user.email}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Телефон:</Text>
            <Text style={styles.value}>{user.phone}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Адрес</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Город:</Text>
            <Text style={styles.value}>{user.address.city}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Улица:</Text>
            <Text style={styles.value}>{user.address.street}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Индекс:</Text>
            <Text style={styles.value}>{user.address.zipcode}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Компания</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Название:</Text>
            <Text style={styles.value}>{user.company.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Слоган:</Text>
            <Text style={styles.value}>{user.company.catchPhrase}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  section: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontWeight: 'bold',
    width: 100,
  },
  value: {
    flex: 1,
  },
});
