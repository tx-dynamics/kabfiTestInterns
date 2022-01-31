import React from 'react';

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
import {fontFamily} from '../../../services';

import {Headers} from '../../../components';
import App from '../../../components/otpinput/App';
import {useNavigation} from '@react-navigation/native';

const Otp = props => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1}}>
        <Headers.TwoHead title={<Text>Enter Verification Code</Text>} />
        <App />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            marginBottom: 10,
            fontFamily: fontFamily.appTextRegular,
          }}>
          Your confirmation code has been sent by SMS to this Number: +44 771
          0000111
        </Text>

        <Text
          style={{textAlign: 'center', fontFamily: fontFamily.appTextRegular}}>
          Not your current number?{' '}
          <Text style={{color: '#FCB040', marginLeft: 12, marginRight: 12}}>
            Change
          </Text>
        </Text>

        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            fontFamily: fontFamily.appTextRegular,
          }}>
          Your confirmation SMS should be delivered soon.
        </Text>
      </View>
      <View style={{flex: 2}}>
        <Buttons.PrimaryButton
          onPress={() => navigation.navigate('Verify')}
          title="RECEIVE CODE VIA PHONE CALL"
        />
      </View>
    </View>
  );
};

export default Otp;
