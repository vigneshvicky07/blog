import React from 'react';
// import {StyleSheet} from 'react-native';
import NavigatorStack from './src/Navigation/StackNavigator/NavigatorStack';
import {AppProvider} from './src/context/context';
import DrawerNavigation from './src/Navigation/DrawerNavigation/NavigationDrawer';
const App = () => (
  <>
    <DrawerNavigation />
  </>
);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // marginTop: Constants.statusBarHeight,
//     marginHorizontal: 16,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//   },
//   header: {
//     fontSize: 32,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//   },
// });

export default () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};
