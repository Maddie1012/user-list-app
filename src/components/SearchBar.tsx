import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const SearchBar = ({
  value,
  onChangeText,
  onFilterPress,
}: {
  value: string;
  onChangeText: (text: string) => void;
  onFilterPress: () => void;
}) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#888" />
      <TextInput
        style={styles.input}
        placeholder="Поиск пользователей..."
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={onFilterPress}>
        <Ionicons name="filter" size={20} color="#888" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    margin: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
});
