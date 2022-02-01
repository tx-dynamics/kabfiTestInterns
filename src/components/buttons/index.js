import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {fontFamily} from '../../services';

export const PrimaryButton = ({title, navigation, onPress, style}) => {
  return (
    <TouchableOpacity
      style={[
        style,
        {
          backgroundColor: '#FCB040',
          height: 45,
          margin: 12,
          padding: 10,
          borderRadius: 25,
        },
      ]}
      onPress={onPress}>
      <Text
        style={{
          textAlign: 'center',
          color: '#FFFFFF',
          fontFamily: fontFamily.appTextRegular,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
