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
import {appStyles} from '../../../services';
import {useNavigation} from '@react-navigation/native';
import {fontFamily} from '../../../services';
import {Buttons} from '../../../components';

const Feedback4 = props => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{flexDirection: 'column'}}>
        <View style={{flex: 1}}>
          <Text
            style={{
              marginTop: 50,

              color: '#464646',
              textAlign: 'center',
              fontFamily: fontFamily.appTextBold,
            }}>
            Happiness Meter
          </Text>
        </View>
        <View
          style={{
            marginTop: 50,
            marginBottom: 50,
            alignItems: 'center',
            flex: 1,
          }}>
          <Image
            style={[appStyles.center, {backgroundColor: 'transparent'}]}
            source={require('../../../assets/icons/star.png')}
          />
        </View>
        <Text
          style={{
            fontFamily: fontFamily.appTextBold,
            color: '#464646',
            textAlign: 'center',
          }}>
          THANK YOU
        </Text>
        <Text
          style={{
            fontFamily: fontFamily.appTextBold,
            color: '#464646',
            textAlign: 'center',
          }}>
          FOR
        </Text>
        <Text
          style={{
            fontFamily: fontFamily.appTextBold,
            color: '#464646',
            textAlign: 'center',
          }}>
          KEEPING KABFI GREAT !
        </Text>
        <Text
          style={{
            fontFamily: fontFamily.appTextBold,
            color: '#464646',
            textAlign: 'center',
            marginTop: 50,
          }}>
          Find out more on
        </Text>
        <Text
          style={{
            fontFamily: fontFamily.appTextBold,
            color: '#FCB040',
            textAlign: 'center',
            marginBottom: 30,
          }}>
          kabfi.com
        </Text>
        <Buttons.PrimaryButton title={<Text>Back Home</Text>} />
      </View>
    </ScrollView>
  );
};

export default Feedback4;
