import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import LoaderScreen from './src/screens/LoaderScreen/LoaderScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import ImageScreen from './src/screens/ImageScreen/ImageScreen';
import {AppProvider} from './src/context/context';
const Stack = createStackNavigator();
const App = () => (
  <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator title="app">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="LoaderScreen" component={LoaderScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};
