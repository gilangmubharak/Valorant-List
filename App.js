import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Home';
import DetailScreen from './components/Detail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'List Agent Valorant',
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#ff4655', 
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold', 
              fontSize: 30,
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route }) => ({ title: route.params.judul, headerStyle: { backgroundColor: '#000' }, headerTintColor: '#fff' })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
