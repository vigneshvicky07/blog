import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import ImageScreen from '../../screens/ImageScreen/ImageScreen';
import LoaderScreen from '../../screens/LoaderScreen/LoaderScreen';

const Drawer = createDrawerNavigator();
export default function NavigationDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator title="app">
        <Drawer.Screen name="LoginScreen" component={LoginScreen} />
        <Drawer.Screen name="LoaderScreen" component={LoaderScreen} />
        <Drawer.Screen name="ImageScreen" component={ImageScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
