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

const Signin = props => {
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
        <View style={{flexDirection: 'column'}}>
          <View style={{flex: 1, marginTop: 20}}>
            <TextInput
              style={{
                height: 40,
                marginTop: 30,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                borderRadius: 20,
                backgroundColor: '#F9F9F9',
                borderColor: 'transparent',
              }}
              onChangeText={''}
              value={''}
              placeholder="Email"
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
                backgroundColor: '#F9F9F9',
                borderColor: 'transparent',
              }}
              onChangeText={''}
              value={''}
              placeholder="Password"
            />
          </View>
        </View>
        <View>
          <Buttons.PrimaryButton
            onPress={() => navigation.navigate('Newsfeed')}
            title=<Text>LOGIN</Text>
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
            <Text style={{textAlign: 'center'}}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, marginTop: 10}}>
          <Text style={{textAlign: 'center'}}>
            Don't have an account?{' '}
            <Text style={{color: '#FCB040'}}>Signup </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signin;
