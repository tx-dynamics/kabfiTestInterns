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

const Verify = props => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{flexDirection: 'column'}}>
        <View style={{marginTop: 100, alignItems: 'center', flex: 1}}>
          <Image
            style={[appStyles.center, {backgroundColor: 'transparent'}]}
            source={require('../../../assets/icons/verify.png')}
          />
        </View>
        <View style={{flexDirection: 'column'}}>
          <View
            style={{flex: 1, marginTop: 30, marginLeft: 12, marginRight: 12}}>
            <Text
              style={{
                textAlign: 'center',
                color: '#464646',
                fontFamily: fontFamily.appTextBold,
              }}>
              Your account should be approved within 24 hours
            </Text>
          </View>
          <View style={{marginTop: 30}}>
            <Buttons.PrimaryButton
              onPress={() => navigation.navigate('Signin')}
              title={<Text>CLOSE THE APP</Text>}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Verify;
