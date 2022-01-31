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
import {height, width} from 'react-native-dimension';
import {Buttons} from '../../../components';

const Feedback3 = props => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <View style={{flexDirection: 'column'}}>
        <View style={{flex: 1}}>
          <Text
            style={{
              marginTop: 30,
              color: '#464646',
              marginLeft: 12,
              fontFamily: fontFamily.appTextBold,
            }}>
            Share your feedback
          </Text>
          <Text
            style={{
              color: '#464646',
              marginLeft: 12,
              fontFamily: fontFamily.appTextRegular,
            }}>
            How you satisfied are you with KABFI?
          </Text>
        </View>
        <View
          style={{
            marginTop: 30,
            marginBottom: 20,
            alignItems: 'center',
            flex: 1,
          }}>
          <Image
            style={[appStyles.center, {backgroundColor: 'transparent'}]}
            source={require('../../../assets/icons/star.png')}
          />
        </View>
        <TextInput
          style={{
            height: height(35),
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 25,
            backgroundColor: '#FFFFFF',
            borderColor: '#D5D5D5',
            fontFamily: fontFamily.appTextRegular,
            textAlignVertical: 'top',
          }}
          onChangeText={''}
          value={''}
          placeholder="Tell Us More"
          placeholderTextColor="#464646"
        />
        <TextInput
          style={{
            height: 45,
            marginLeft: 12,
            marginRight: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 25,
            backgroundColor: '#FFFFFF',
            borderColor: '#D5D5D5',
            fontFamily: fontFamily.appTextRegular,
          }}
          onChangeText={''}
          value={''}
          placeholder="Your Mobile Number"
          placeholderTextColor="#464646"
        />
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFFFFF',
                height: 45,
                margin: 12,
                borderColor: '#FCB040',
                borderWidth: 1,
                padding: 10,
                borderRadius: 25,
              }}
              onPress={''}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#FCB040',
                  fontFamily: fontFamily.appTextRegular,
                }}>
                PREVIOUS
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFFFFF',
                height: 45,
                margin: 12,
                borderColor: '#FCB040',
                borderWidth: 1,
                padding: 10,
                borderRadius: 25,
              }}
              onPress={() => navigation.navigate('Feedback4')}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#FCB040',
                  fontFamily: fontFamily.appTextRegular,
                }}>
                SUBMIT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Feedback3;
