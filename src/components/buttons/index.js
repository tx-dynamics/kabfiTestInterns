import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';

export const PrimaryButton = ({title, navigation, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#FCB040',
        height: 40,
        margin: 12,

        padding: 10,
        borderRadius: 20,
      }}
      onPress={onPress}>
      <Text style={{textAlign: 'center', color: '#FFFFFF'}}>{title}</Text>
    </TouchableOpacity>
  );
};
