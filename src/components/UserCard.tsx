import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export const UserCard = ({ user, onPress }: { user: any; onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.city}>{user.address.city}</Text>
      </View>
    </TouchableOpacity>
  );
};

// вынос стилей из компонента
const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    color: '#666',
    marginBottom: 4,
  },
  city: {
    color: '#888',
  },
});
