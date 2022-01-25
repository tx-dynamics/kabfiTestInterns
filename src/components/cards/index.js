import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Modal,
  TouchableOpacity,
} from 'react-native';

export const NotifiCard = () => {
  return (
    <View
      style={{
        flex: 5,
        flexDirection: 'column',
        backgroundColor: 'transparent',
      }}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          backgroundColor: '#FFF1DB',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#000000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.9,
          shadowRadius: 3,
          elevation: 3,
        }}>
        <View style={{flex: 1, marginRight: 20, left: 30}}>
          <Image
            source={require('../../assets/icons/bell.png')}
            style={{
              height: 20,
              width: 20,
            }}
          />
        </View>
        <View style={{flex: 1, alignItems: 'center', right: 90}}>
          <Text style={{color: '#464646'}}>
            Permission to access location was denied.
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'transparent',
          flex: 1,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          shadowColor: '#000000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.9,
          shadowRadius: 3,
          elevation: 3,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#FBFBFB',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomLeftRadius: 40,
          }}
          onPress={''}>
          <Text style={{textAlign: 'center', color: '#464646'}}>OK</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#FBFBFB',
            borderBottomRightRadius: 40,

            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
          onPress={''}>
          <Text style={{color: '#464646'}}>Change Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
