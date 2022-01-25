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

const Forgotpass = props => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{flexDirection: 'column'}}>
        <View style={{marginTop: 50, alignItems: 'center', flex: 1}}>
          <Image
            style={[appStyles.center, {backgroundColor: 'transparent'}]}
            source={require('../../../assets/icons/pass.png')}
          />
        </View>
        <View style={{flexDirection: 'column'}}>
          <View style={{flex: 1, marginTop: 30}}>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
              Reset Password
            </Text>
          </View>
          <View style={{flex: 1, marginTop: 10}}>
            <Text style={{textAlign: 'center'}}>
              Enter the email associated with your account and we'll send an
              email with instructions to reset your password.
            </Text>
          </View>
          <View style={{flex: 1, marginTop: 30}}>
            <TextInput
              style={{
                backgroundColor: '#FBFBFB',
                height: 40,
                margin: 12,

                padding: 10,
                borderRadius: 20,
                textAlign: 'center',
              }}
              placeholder="Email Address"></TextInput>
          </View>
          <View style={{flex: 1, marginTop: 30}}>
            <Buttons.PrimaryButton
              onPress={() => navigation.navigate('Chekmail')}
              title=<Text>SUBMIT</Text>
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Forgotpass;
