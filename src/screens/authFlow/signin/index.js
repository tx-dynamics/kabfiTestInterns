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

const Signin = props => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            marginTop: 50,
            alignItems: 'center',
            flex: 1,
          }}>
          <Image
            style={[appStyles.center, {backgroundColor: 'transparent'}]}
            source={require('../../../assets/icons/kabfiLogo.png')}
          />
        </View>
        <View style={{flexDirection: 'column'}}>
          <View style={{flex: 1, marginTop: 20}}>
            <TextInput
              style={{
                height: 45,
                marginTop: 30,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                borderRadius: 25,
                backgroundColor: '#F9F9F9',
                borderColor: 'transparent',
                fontFamily: fontFamily.appTextRegular,
              }}
              onChangeText={''}
              value={''}
              placeholder="Email"
              placeholderTextColor="#464646"
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
                backgroundColor: '#F9F9F9',
                borderColor: 'transparent',
                fontFamily: fontFamily.appTextRegular,
              }}
              onChangeText={''}
              value={''}
              placeholder="Password"
              placeholderTextColor="#464646"
            />
          </View>
        </View>
        <View>
          <Buttons.PrimaryButton
            onPress={() => navigation.navigate('Newsfeed')}
            title={<Text>LOGIN</Text>}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 40,
            alignItems: 'center',
          }}>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Image
              style={{}}
              source={require('../../../assets/icons/fb.png')}
            />
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image
              style={{}}
              source={require('../../../assets/icons/twtr.png')}
            />
          </View>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <Image
              style={{}}
              source={require('../../../assets/icons/insta.png')}
            />
          </View>
        </View>
        <View style={{flex: 1, marginTop: 40}}>
          <TouchableOpacity onPress={() => navigation.navigate('Forgotpass')}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: fontFamily.appTextRegular,
                color: '#464646',
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, marginTop: 10}}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: fontFamily.appTextRegular,
              color: '#464646',
            }}>
            Don't have an account?{' '}
            <Text style={{color: '#FCB040'}}>Signup </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signin;
