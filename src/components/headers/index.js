import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

export const TwoHead = ({title, navigation, onPress, Text}) => {
  return (
    <View
      style={{
        // justifyContent: "space-around",
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
        width: '100%',
        height: 50,
        // alignItems: "center",
      }}>
      <View
        style={{
          //   borderWidth: 1,
          width: '20%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={onPress}>
          <Image style={{}} source={require('../../assets/icons/back.png')} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          //   borderWidth: 1,
          width: '60%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {title}
      </View>
    </View>
  );
};

export const ThreeHead = ({title, navigation, onPress, Text}) => {
  return (
    <View
      style={{
        // justifyContent: "space-around",
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
        width: '100%',
        height: 50,
        // alignItems: "center",
      }}>
      <View
        style={{
          //   borderWidth: 1,
          width: '20%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={onPress}>
          <Image style={{}} source={require('../../assets/icons/menu.png')} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          //   borderWidth: 1,
          width: '60%',
          height: 50,
          alignItems: 'center',
        }}>
        {title}
      </View>
      <View
        style={{
          //   borderWidth: 1,
          width: '20%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={onPress}>
          <Image style={{}} source={require('../../assets/icons/bell.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
