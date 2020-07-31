import React from 'react';
import {View, Text, Button} from 'react-native';

export default function LoaderScreen(props) {
  const RoutingBack = () => props.navigation.navigate('LoginScreen');
  return (
    <View>
      <Button title="Go back" onPress={RoutingBack} />

      <Text>HAi there</Text>
    </View>
  );
}
