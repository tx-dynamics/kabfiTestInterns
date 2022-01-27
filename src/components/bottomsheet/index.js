import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const BottomSheet = () => {
  const navigation = useNavigation();
  return (
    <View style={{margin: 30}}>
      <View style={{flexDirection: 'row', marginBottom: 30}}>
        <Image
          style={{marginRight: 10}}
          source={require('../../assets/images/prof.png')}></Image>
        <View>
          <Text style={{fontWeight: 'bold', marginRight: 10}}>
            John Thompson
          </Text>
          <Text>4.92 *</Text>
        </View>
        <Text>Member Since 2021</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 20, width: 20, marginRight: 5, marginLeft: 5}}
          source={require('../../assets/icons/editprof.png')}></Image>
        <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
          <Text>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <Image
        style={{marginTop: 10, marginBottom: 10}}
        source={require('../../assets/icons/line.png')}></Image>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{marginRight: 5, height: 20, width: 20, marginLeft: 5}}
          source={require('../../assets/icons/editprof.png')}></Image>
        <Text>Edit Profile</Text>
      </View>
      <Image
        style={{marginTop: 10, marginBottom: 10}}
        source={require('../../assets/icons/line.png')}></Image>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 20, width: 20, marginRight: 5, marginLeft: 5}}
          source={require('../../assets/icons/refer-taxi.png')}></Image>
        <Text>Edit Profile</Text>
      </View>
      <Image
        style={{marginTop: 10, marginBottom: 10}}
        source={require('../../assets/icons/line.png')}></Image>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 20, width: 20, marginRight: 5, marginLeft: 5}}
          source={require('../../assets/icons/hotspot.png')}></Image>
        <Text>Edit Profile</Text>
      </View>
      <Image
        style={{marginTop: 10, marginBottom: 10}}
        source={require('../../assets/icons/line.png')}></Image>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 20, width: 20, marginRight: 5, marginLeft: 5}}
          source={require('../../assets/icons/editprof.png')}></Image>
        <Text>Edit Profile</Text>
      </View>
      <Image
        style={{marginTop: 10, marginBottom: 10}}
        source={require('../../assets/icons/line.png')}></Image>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 20, width: 20, marginRight: 5, marginLeft: 5}}
          source={require('../../assets/icons/settings.png')}></Image>
        <Text>Edit Profile</Text>
      </View>
      <Image
        style={{marginTop: 10, marginBottom: 10}}
        source={require('../../assets/icons/line.png')}></Image>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 20, width: 20, marginRight: 5, marginLeft: 5}}
          source={require('../../assets/icons/feedback.png')}></Image>
        <Text>Edit Profile</Text>
      </View>
      <Image
        style={{marginTop: 10, marginBottom: 10}}
        source={require('../../assets/icons/line.png')}></Image>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 20, width: 20, marginRight: 5, marginLeft: 5}}
          source={require('../../assets/icons/help.png')}></Image>
        <Text>Edit Profile</Text>
      </View>
      <Image
        style={{marginTop: 10, marginBottom: 10}}
        source={require('../../assets/icons/line.png')}></Image>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 20, width: 20, marginRight: 5, marginLeft: 5}}
          source={require('../../assets/icons/legal.png')}></Image>
        <Text>Edit Profile</Text>
      </View>
    </View>
  );
};
export default BottomSheet;
