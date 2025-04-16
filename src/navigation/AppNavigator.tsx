import { createStackNavigator } from '@react-navigation/stack';
import { UsersListScreen } from '../screens/UsersListScreen';
import { UserDetailsScreen } from '../screens/UsersDetailsScreen';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="UsersList">
      <Stack.Screen 
        name="UsersList" 
        component={UsersListScreen}
        options={{ title: 'Список пользователей' }}
      />
      <Stack.Screen 
        name="UserDetails" 
        component={UserDetailsScreen}
        options={{ title: 'Профиль пользователя' }}
      />
    </Stack.Navigator>
  );
};