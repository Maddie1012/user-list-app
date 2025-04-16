import React from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  filters: {
    city: string;
    company: string;
  };
  setFilters: (filters: { city: string; company: string }) => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({
  visible,
  onClose,
  filters,
  setFilters,
}) => {
  const handleChange = (key: 'city' | 'company', value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleClear = () => {
    setFilters({ city: '', company: '' });
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Фильтры</Text>

          <Text style={styles.label}>Город</Text>
          <TextInput
            style={styles.input}
            placeholder="Введите город"
            value={filters.city}
            onChangeText={(text) => handleChange('city', text)}
          />

          <Text style={styles.label}>Компания</Text>
          <TextInput
            style={styles.input}
            placeholder="Введите название компании"
            value={filters.company}
            onChangeText={(text) => handleChange('company', text)}
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={handleClear} style={styles.button}>
              <Text style={styles.buttonText}>Сбросить</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose} style={styles.button}>
              <Text style={styles.buttonText}>Закрыть</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
