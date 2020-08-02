import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import {AppContext} from '../../context/context';

import ImageDetails from './ImageDetails';
export default function ImageScreen() {
  const [Value, setValue] = useState('');
  const {Dress, addDress} = useContext(AppContext);
  const renderItem = ({item}) => {
    return (
      <View style={style.container}>
        <ImageDetails Data={item.title} />
      </View>
    );
  };

  return (
    <View>
      <Text>Image screen</Text>

      <TextInput
        value={Value}
        onChangeText={(NewValue) => setValue(NewValue)}
      />
      <Button title="Add Me" onPress={() => addDress(Value)} />
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
