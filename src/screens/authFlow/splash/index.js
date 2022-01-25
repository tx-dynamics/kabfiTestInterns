import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Splash() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',

        marginTop: 'auto',
        marginBottom: 'auto',
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Image source={require('../../../assets/icons/kabfiIcon.png')} />
      </TouchableOpacity>
    </View>
  );
}

export default Splash;
