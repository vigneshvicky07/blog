import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import {AppProvider} from '../../context/context';

import ImageDetails from './ImageDetails';
export default function ImageScreen() {
  const [Value, setValue] = useState('');
  const {Dress, addDress} = useContext(AppProvider);
  const renderItem = ({item}) => {
    return (
      <View style={style.container}>
        <ImageDetails Data={item.title} />
      </View>
    );
  };
  console.log('dress', AppProvider[Function]);

  return (
    <View>
      <Text>Image screen</Text>

      <TextInput
        value={Value}
        // autoCapitalize = {true}
        onChangeText={(NewValue) => setValue(NewValue)}
      />
      {/* <Text>{Value}</Text> */}
      <Button title="Add Me" onPress={addDress} />
      <FlatList
        style={style.container}
        data={Dress}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
