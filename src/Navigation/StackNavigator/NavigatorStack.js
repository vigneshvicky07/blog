import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoaderScreen from '../../screens/LoaderScreen/LoaderScreen';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import ImageScreen from '../../screens/ImageScreen/ImageScreen';

const Stack = createStackNavigator();

export default function NavigatorStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator title="app">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="LoaderScreen" component={LoaderScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
