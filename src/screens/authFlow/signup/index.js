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

const Signup = props => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{flexDirection: 'column'}}>
        <View style={{marginTop: 50, alignItems: 'center', flex: 1}}>
          <Image
            style={[appStyles.center]}
            source={require('../../../assets/icons/kabfiLogo.png')}
          />
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              marginTop: 30,
              fontFamily: 'Roboto-Medium',
              color: '#464646',
              textAlign: 'center',
            }}>
            CREATE AN ACCOUNT
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 50}}>
          <View style={{flex: 1}}>
            <TextInput
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                borderRadius: 20,
                borderColor: '#CCCCCC',
              }}
              onChangeText={''}
              value={''}
              placeholder="First Name"
            />
          </View>
          <View style={{flex: 1}}>
            <TextInput
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                borderRadius: 20,
                borderColor: '#CCCCCC',
              }}
              onChangeText={''}
              value={''}
              placeholder="Last Name"
            />
          </View>
        </View>
        <View>
          <TextInput
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              borderRadius: 20,
              borderColor: '#CCCCCC',
            }}
            onChangeText={''}
            value={''}
            placeholder="+44 700 000 0000"
          />
        </View>
        <View>
          <TextInput
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              borderRadius: 20,
              borderColor: '#CCCCCC',
            }}
            onChangeText={''}
            value={''}
            placeholder="name@example.com"
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <TextInput
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                borderRadius: 20,
                borderColor: '#CCCCCC',
              }}
              onChangeText={''}
              value={''}
              placeholder="Upload Image"
            />
          </View>
          <View style={{flex: 1}}>
            <TextInput
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                borderRadius: 20,
                borderColor: '#CCCCCC',
              }}
              onChangeText={''}
              value={''}
              placeholder="Upload Image"
            />
          </View>
        </View>
        <View>
          <TextInput
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              borderRadius: 20,
              borderColor: '#CCCCCC',
            }}
            onChangeText={''}
            value={''}
            placeholder="Password"
          />
        </View>
        <View style={{flex: 1, marginTop: 30, marginBottom: 20}}>
          <Text style={{textAlign: 'center'}}>
            By Clicking Submit Button below you are agreeing to the Kabfi{' '}
            <Text style={{color: '#FCB040'}}>Terms and Conditions </Text>and{' '}
            <Text style={{color: '#FCB040'}}>Privacy Policy</Text>
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Buttons.PrimaryButton
            onPress={() => navigation.navigate('Otp')}
            title=<Text>SUBMIT</Text>
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
