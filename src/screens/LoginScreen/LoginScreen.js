import React from 'react';
import {
  View,
  Text,
  Button,
  DeviceEventEmitter,
  NativeModules,
} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
// import MapView from 'react-native-maps';
import {useEffect} from 'react';
export default function LoginScreen({navigation}) {
  const NavigateButtonFunction = () => {
    navigation.navigate('LoaderScreen');
  };
  const NavigateButtonFunctionShopping = () => {
    navigation.navigate('ImageScreen');
  };

  useEffect(() => {
    DeviceEventEmitter.addListener(
      'FINGERPRINT_SCANNER_AUTHENTICATION',
      (msg) => {
        console.log('false authentication');
      },
    );
    Scan().then((success) =>
      success ? console.log('sucesss') : console.log('failed'),
    );
  }, []);

  async function Scan() {
    return FingerprintScanner.authenticate({
      description: 'Scan your fingerprint on the device scanner to continue',
    });
  }
  return (
    <>
      {/* <MapView /> */}
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
