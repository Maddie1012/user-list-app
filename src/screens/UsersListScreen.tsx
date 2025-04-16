import React, { useState, useMemo } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useUsers } from '../hooks/useUsers';
import { UserCard } from '../components/UserCard';
import { SearchBar } from '../components/SearchBar';
import { FilterModal } from '../components/FilterModal';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { ErrorMessage } from '../components/ErrorMessage';

export const UsersListScreen = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [filters, setFilters] = useState({
    city: '',
    company: '',
  });

  const { data: users, isLoading, error } = useUsers();

  // useMemo для фильтрации
  // избегаем повторных вычислений при каждом рендере
  const filteredUsers = useMemo(() => {
    if (!users) return [];

    return users.filter(user => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCity = filters.city
        ? user.address.city.toLowerCase().includes(filters.city.toLowerCase())
        : true;

      const matchesCompany = filters.company
        ? user.company.name.toLowerCase().includes(filters.company.toLowerCase())
        : true;

      return matchesSearch && matchesCity && matchesCompany;
    });
  }, [users, searchQuery, filters]);

  // разделение экранов загрузки/ошибок
  if (isLoading) return <LoadingIndicator />;
  if (error) return <ErrorMessage message="Ошибка загрузки данных" />;

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onFilterPress={() => setFilterModalVisible(true)}
      />

      <FilterModal
        visible={isFilterModalVisible}
        onClose={() => setFilterModalVisible(false)}
        filters={filters}
        setFilters={setFilters}
      />

{/* FlatList с настройками производительности */}
      <FlatList
        data={filteredUsers}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <UserCard
            user={item}
            onPress={() => navigation.navigate('UserDetails', { user: item })}
          />
        )}
        contentContainerStyle={styles.listContent}
        initialNumToRender={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 10,
  },
});
