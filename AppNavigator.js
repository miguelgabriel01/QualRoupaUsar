import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Page from './app/index';
import FormCreate from './app/formCreate';
import FormLogin from './app/formLogin';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page">
        <Stack.Screen name="Page" component={Page} />
        <Stack.Screen name="formCreate" component={FormCreate} />
        <Stack.Screen name="formLogin" component={FormLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
