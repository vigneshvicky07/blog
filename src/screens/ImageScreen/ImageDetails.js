import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ImageDetails(props) {
  console.log('hai', typeof props.Data);
  return (
    <View>
      <ScrollView>
        <Text>{props.Data}</Text>
        <Icon name="add" onPress={() => console.log('pressed')} />
      </ScrollView>
    </View>
  );
}
