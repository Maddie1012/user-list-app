import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    fontSize: 16,
    color: '#ff0000',
    textAlign: 'center',
  },
});
