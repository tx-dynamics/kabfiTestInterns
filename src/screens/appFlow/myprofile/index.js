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
import {fontFamily} from '../../../services';

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
            fontFamily: fontFamily.appTextRegular,
          }}>
          First Name
        </Text>
        <Text
          style={{
            marginBottom: 2,
            marginLeft: 10,
            fontFamily: fontFamily.appTextRegular,
            color: '#464646',
          }}>
          John
        </Text>
        <Image source={require('../../../assets/icons/line.png')}></Image>
        <Text
          style={{
            color: '#D5D5D5',
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
            fontFamily: fontFamily.appTextRegular,
          }}>
          Last Name
        </Text>
        <Text
          style={{
            marginBottom: 2,
            marginLeft: 10,
            fontFamily: fontFamily.appTextRegular,
            color: '#464646',
          }}>
          Thompson
        </Text>
        <Image source={require('../../../assets/icons/line.png')}></Image>
        <Text
          style={{
            color: '#D5D5D5',
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
            fontFamily: fontFamily.appTextRegular,
          }}>
          Password
        </Text>
        <Text
          style={{
            marginBottom: 2,
            marginLeft: 10,
            fontFamily: fontFamily.appTextRegular,
            color: '#464646',
          }}>
          ********
        </Text>
        <Image source={require('../../../assets/icons/line.png')}></Image>
        <Text
          style={{
            color: '#D5D5D5',
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
            fontFamily: fontFamily.appTextRegular,
          }}>
          Phone Number
        </Text>
        <Text
          style={{
            marginBottom: 2,
            marginLeft: 10,
            fontFamily: fontFamily.appTextRegular,
            color: '#464646',
          }}>
          +44 77 000 00 000
        </Text>
        <Image source={require('../../../assets/icons/line.png')}></Image>
        <Text
          style={{
            color: '#D5D5D5',
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
            fontFamily: fontFamily.appTextRegular,
          }}>
          Email
        </Text>
        <Text
          style={{
            marginBottom: 2,
            marginLeft: 10,
            fontFamily: fontFamily.appTextRegular,
            color: '#464646',
          }}>
          user@gmail.com
        </Text>
        <Image source={require('../../../assets/icons/line.png')}></Image>
        <Text
          style={{
            color: '#D5D5D5',
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
            fontFamily: fontFamily.appTextRegular,
          }}>
          City, State
        </Text>
        <Text
          style={{
            marginBottom: 2,
            marginLeft: 10,
            fontFamily: fontFamily.appTextRegular,
            color: '#464646',
          }}>
          London
        </Text>
        <Image source={require('../../../assets/icons/line.png')}></Image>
        <Text
          style={{
            color: '#D5D5D5',
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
            fontFamily: fontFamily.appTextRegular,
          }}>
          Country
        </Text>
        <Text
          style={{
            marginBottom: 2,
            marginLeft: 10,
            fontFamily: fontFamily.appTextRegular,
            color: '#464646',
          }}>
          United Kingdom
        </Text>
        <Image source={require('../../../assets/icons/line.png')}></Image>
      </View>
    </ScrollView>
  );
};

export default MyProfile;
