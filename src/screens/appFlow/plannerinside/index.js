import React, {useState} from 'react';

import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';
import {appStyles} from '../../../services';
import {useNavigation} from '@react-navigation/native';
import {baseGestureHandlerWithMonitorProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon';
import {Buttons} from '../../../components';
import {height, width, totalSize} from 'react-native-dimension';
import {fontFamily, fontSize} from '../../../services';

const PlannerInside = props => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/images/ricky-gervais.png')}
        style={{flex: 1}}>
        <ImageBackground
          style={{flex: 1}}
          source={require('../../../assets/images/shade.png')}>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <View
              style={{
                flexDirection: 'row',
                margin: 12,
              }}>
              <Image
                source={require('../../../assets/icons/clock.png')}
                style={{marginRight: 10}}></Image>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontFamily: fontFamily.appTextRegular,
                }}>
                Sat, 18 Sept. 12:00-22:30 in{' '}
                <Text style={{fontFamily: fontFamily.appTextBold}}>4 Days</Text>
              </Text>
            </View>
            <View style={{flexDirection: 'row', margin: 12}}>
              <Image
                source={require('../../../assets/icons/location.png')}
                style={{marginRight: 10}}></Image>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontFamily: fontFamily.appTextRegular,
                }}>
                <Text style={{fontFamily: fontFamily.appTextBold}}>
                  The Drumsheds
                </Text>{' '}
                Unit 5, Orbital Business Park, Argon Rd, London
              </Text>
            </View>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: fontFamily.appTextBold,
                marginLeft: 12,
                marginTop: 10,
                fontSize: fontSize.h1,
              }}>
              THE INIMITABLE CARL COX
            </Text>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: fontFamily.appTextRegular,
                marginLeft: 12,
                marginBottom: 10,
              }}>
              makes his debut at The Drum sheds
            </Text>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: fontFamily.appTextRegular,
                margin: 12,
              }}>
              One of the biggest names on dance music’s Hall of Fame, Carl Cox
              headlines a special all-day festival in September with support
              from Alisha, Andrea Oliva, Francisco Allendes, Matador [live] and
              Monika Kruse
            </Text>
            <Buttons.PrimaryButton
              style={{marginBottom: 30}}
              title={<Text>Add it to calendar </Text>}
            />
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

export default PlannerInside;
