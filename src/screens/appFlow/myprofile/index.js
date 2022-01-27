import React, {useState} from 'react';

import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';
import {appStyles} from '../../../services';
import {useNavigation} from '@react-navigation/native';
import {Headers} from '../../../components';

const MyProfile = props => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <Headers.ThreeTextHead
        title={<Text>Edit Profile</Text>}
        textLeft={<Text>Back</Text>}
        textRight={<Text>Save</Text>}
      />
      <View style={{alignItems: 'center', paddingTop: 30, paddingBottom: 30}}>
        <ImageBackground
          source={require('../../../assets/images/prof.png')}
          imageStyle={{}}
          style={{
            width: 90,
            height: 90,
            flexDirection: 'row-reverse',
          }}>
          <Image
            style={{height: 25, width: 25}}
            source={require('../../../assets/icons/edit.png')}
          />
        </ImageBackground>
      </View>
      <View style={{margin: 20}}>
        <Text
          style={{
            color: '#D5D5D5',
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
          }}>
          First Name
        </Text>
        <Text style={{marginBottom: 2, marginLeft: 10}}>John</Text>
        <Image source={require('../../../assets/icons/line.png')}></Image>
        <Text
          style={{
            color: '#D5D5D5',
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
          }}>
          Last Name
        </Text>
        <Text style={{marginBottom: 2, marginLeft: 10}}>Thompson</Text>
        <Image source={require('../../../assets/icons/line.png')}></Image>
        <Text
          style={{
            color: '#D5D5D5',
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
          }}>
          Password
        </Text>
        <Text style={{marginBottom: 2, marginLeft: 10}}>********</Text>
        <Image source={require('../../../assets/icons/line.png')}></Image>
        <Text
          style={{
            color: '#D5D5D5',
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
          }}>
          Phone Number
        </Text>
        <Text style={{marginBottom: 2, marginLeft: 10}}>+44 77 000 00 000</Text>
        <Image source={require('../../../assets/icons/line.png')}></Image>
        <Text
          style={{
            color: '#D5D5D5',
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
          }}>
          Email
        </Text>
        <Text style={{marginBottom: 2, marginLeft: 10}}>user@gmail.com</Text>
        <Image source={require('../../../assets/icons/line.png')}></Image>
        <Text
          style={{
            color: '#D5D5D5',
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
          }}>
          City, State
        </Text>
        <Text style={{marginBottom: 2, marginLeft: 10}}>London</Text>
        <Image source={require('../../../assets/icons/line.png')}></Image>
        <Text
          style={{
            color: '#D5D5D5',
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
          }}>
          Country
        </Text>
        <Text style={{marginBottom: 2, marginLeft: 10}}>United Kingdom</Text>
        <Image source={require('../../../assets/icons/line.png')}></Image>
      </View>
    </ScrollView>
  );
};

export default MyProfile;
