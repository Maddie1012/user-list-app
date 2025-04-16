import { useQuery } from 'react-query';
import { fetchUsers } from '../utils/api';

// кеширование данных с react-query
export const useUsers = () => {
  return useQuery('users', fetchUsers, {
    staleTime: 1000 * 60 * 5,
  });
};