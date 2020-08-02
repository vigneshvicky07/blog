import React from 'react';
import {View, Text, Button} from 'react-native';
import MapView from 'react-native-maps';
export default function LoginScreen({navigation}) {
  const NavigateButtonFunction = () => {
    navigation.navigate('LoaderScreen');
  };
  const NavigateButtonFunctionShopping = () => {
    navigation.navigate('ImageScreen');
  };
  return (
    <>
      <MapView />
      <View>
        <Text>Login Screen</Text>
        <Button onPress={NavigateButtonFunction} title="press me" />
        <Button
          onPress={NavigateButtonFunctionShopping}
          title="go to shopping"
        />
      </View>
    </>
  );
}
