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

const Chekmail = props => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{flexDirection: 'column'}}>
        <View style={{marginTop: 100, alignItems: 'center', flex: 1}}>
          <Image
            style={[appStyles.center, {backgroundColor: 'transparent'}]}
            source={require('../../../assets/icons/key.png')}
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
              Check your Email
            </Text>
          </View>
          <View style={{flex: 1, marginTop: 10}}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: fontFamily.appTextRegular,
                color: '#464646',
                marginLeft: 12,
                marginRight: 12,
              }}>
              We have sent password recovery instructions to your email.
            </Text>
          </View>

          <View style={{marginTop: 30}}>
            <Buttons.PrimaryButton
              onPress={() => navigation.navigate('Signin')}
              title=<Text>BACK</Text>
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Chekmail;
