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
import {fontFamily} from '../../../services';

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
          <View style={{height: height(30)}}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../../assets/icons/clock.png')}></Image>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontFamily: fontFamily.appTextRegular,
                }}>
                Sat, 18 Sept. 12:00-22:30 in{' '}
                <Text style={{fontFamily: fontFamily.appTextBold}}>4 Days</Text>
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../../assets/icons/location.png')}></Image>
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
              style={{color: '#FFFFFF', fontFamily: fontFamily.appTextBold}}>
              The inimitable Carl Cox
            </Text>
            <Text
              style={{color: '#FFFFFF', fontFamily: fontFamily.appTextRegular}}>
              makes his debut at The Drum sheds
            </Text>
            <Text
              style={{color: '#FFFFFF', fontFamily: fontFamily.appTextRegular}}>
              One of the biggest names on dance music’s Hall of Fame, Carl Cox
              headlines a special all-day festival in September with support
              from Alisha, Andrea Oliva, Francisco Allendes, Matador [live] and
              Monika Kruse
            </Text>
            <Buttons.PrimaryButton title={<Text>Add it to calendar </Text>} />
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

export default PlannerInside;
