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

const Forgotpass = props => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <View style={{flexDirection: 'column'}}>
        <View style={{marginTop: 50, alignItems: 'center', flex: 1}}>
          <Image
            style={[appStyles.center, {backgroundColor: 'transparent'}]}
            source={require('../../../assets/icons/pass.png')}
          />
        </View>
        <View style={{flexDirection: 'column'}}>
          <View style={{flex: 1, marginTop: 30}}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: fontFamily.appTextBold,
                color: '#464646',
              }}>
              Reset Password
            </Text>
          </View>
          <View style={{flex: 1, marginTop: 10}}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: fontFamily.appTextRegular,
                color: '#464646',
                marginRight: 12,
                marginLeft: 12,
              }}>
              Enter the email associated with your account and we'll send an
              email with instructions to reset your password.
            </Text>
          </View>
          <View style={{flex: 1, marginTop: 30}}>
            <TextInput
              style={{
                backgroundColor: '#FBFBFB',
                height: 45,
                margin: 12,

                padding: 10,
                borderRadius: 25,
                textAlign: 'center',
                fontFamily: fontFamily.appTextRegular,
              }}
              placeholder="Email Address"
              placeholderTextColor="#464646"></TextInput>
          </View>
          <View style={{flex: 1, marginTop: 30}}>
            <Buttons.PrimaryButton
              onPress={() => navigation.navigate('Chekmail')}
              title={<Text>SUBMIT</Text>}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Forgotpass;
