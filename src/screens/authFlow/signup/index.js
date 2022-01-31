import React, {useState} from 'react';

import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {Buttons} from '../../../components';
import {appStyles} from '../../../services';
import {useNavigation} from '@react-navigation/native';
import {fontFamily} from '../../../services';

const Signup = props => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        flex: 1,
      }}>
      <View style={{marginTop: 50, alignItems: 'center', flex: 0.5}}>
        <Image
          style={[appStyles.center]}
          source={require('../../../assets/icons/kabfiLogo.png')}
        />
      </View>
      <View style={{flex: 0.5}}>
        <Text
          style={{
            color: '#464646',
            fontFamily: fontFamily.appTextBold,
            textAlign: 'center',
          }}>
          CREATE AN ACCOUNT
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <TextInput
            style={{
              height: 45,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              borderRadius: 25,
              borderColor: '#E3E3E3',
              fontFamily: fontFamily.appTextRegular,
            }}
            onChangeText={''}
            value={''}
            placeholder="First Name"
            placeholderTextColor="#E3E3E3"
          />
        </View>
        <View style={{flex: 1}}>
          <TextInput
            style={{
              height: 45,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              borderRadius: 25,
              borderColor: '#E3E3E3',
              fontFamily: fontFamily.appTextRegular,
            }}
            onChangeText={''}
            value={''}
            placeholder="Last Name"
            placeholderTextColor="#E3E3E3"
          />
        </View>
      </View>
      <View>
        <TextInput
          style={{
            height: 45,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 25,
            borderColor: '#E3E3E3',
            fontFamily: fontFamily.appTextRegular,
          }}
          onChangeText={''}
          value={''}
          placeholder="+44 700 000 0000"
          placeholderTextColor="#E3E3E3"
        />
      </View>
      <View>
        <TextInput
          style={{
            height: 45,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 25,
            borderColor: '#E3E3E3',
            fontFamily: fontFamily.appTextRegular,
          }}
          onChangeText={''}
          value={''}
          placeholder="name@example.com"
          placeholderTextColor="#E3E3E3"
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <TextInput
            style={{
              height: 45,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              borderRadius: 25,
              borderColor: '#E3E3E3',
              fontFamily: fontFamily.appTextRegular,
            }}
            onChangeText={''}
            value={''}
            placeholder="Upload Image"
            placeholderTextColor="#E3E3E3"
          />
        </View>
        <View style={{flex: 1}}>
          <TextInput
            style={{
              height: 45,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              borderRadius: 25,
              borderColor: '#E3E3E3',
              fontFamily: fontFamily.appTextRegular,
            }}
            onChangeText={''}
            value={''}
            placeholder="Upload Image"
            placeholderTextColor="#E3E3E3"
          />
        </View>
      </View>
      <View>
        <TextInput
          style={{
            height: 45,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 25,
            borderColor: '#E3E3E3',
            fontFamily: fontFamily.appTextRegular,
          }}
          onChangeText={''}
          value={''}
          placeholder="Password"
          placeholderTextColor="#E3E3E3"
        />
      </View>
      <View style={{flex: 1, marginTop: 20}}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: fontFamily.appTextRegular,
            marginLeft: 20,
            marginRight: 20,
          }}>
          By Clicking Submit Button below you are agreeing to the Kabfi{' '}
          <Text style={{color: '#FCB040'}}>Terms and Conditions </Text>and{' '}
          <Text style={{color: '#FCB040'}}>Privacy Policy</Text>
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Buttons.PrimaryButton
          onPress={() => navigation.navigate('Otp')}
          title={<Text>SUBMIT</Text>}
        />
      </View>
    </View>
  );
};

export default Signup;
