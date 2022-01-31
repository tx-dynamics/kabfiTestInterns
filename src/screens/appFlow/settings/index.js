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

const Settings = props => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Headers.TwoHead title={<Text>Settings</Text>} />
      <View style={{paddingTop: 20}}>
        <View style={{flexDirection: 'row', margin: 20}}>
          <Image
            style={{height: 20, width: 20, marginRight: 7, marginLeft: 5}}
            source={require('../../../assets/icons/change-password.png')}></Image>

          <Text
            style={{fontFamily: fontFamily.appTextRegular, color: '#464646'}}>
            Change Password
          </Text>
        </View>

        <View style={{flexDirection: 'row', margin: 20}}>
          <Image
            style={{marginRight: 7, height: 20, width: 20, marginLeft: 5}}
            source={require('../../../assets/icons/notification-settings.png')}></Image>
          <Text
            style={{fontFamily: fontFamily.appTextRegular, color: '#464646'}}>
            Notification Settings
          </Text>
        </View>

        <View style={{flexDirection: 'row', margin: 20}}>
          <Image
            style={{height: 20, width: 20, marginRight: 7, marginLeft: 5}}
            source={require('../../../assets/icons/about.png')}></Image>
          <Text
            style={{fontFamily: fontFamily.appTextRegular, color: '#464646'}}>
            About
          </Text>
        </View>

        <View style={{flexDirection: 'row', margin: 20}}>
          <Image
            style={{height: 20, width: 20, marginRight: 7, marginLeft: 5}}
            source={require('../../../assets/icons/logout.png')}></Image>
          <Text
            style={{fontFamily: fontFamily.appTextRegular, color: '#464646'}}>
            Log Out
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Settings;
