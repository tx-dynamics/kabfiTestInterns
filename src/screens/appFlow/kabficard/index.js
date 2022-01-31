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

const Kabficard = props => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{flexDirection: 'column'}}>
        <View style={{flex: 1}}>
          <Text
            style={{
              marginTop: 15,
              fontFamily: fontFamily.appTextBold,
              color: '#464646',
              textAlign: 'center',
            }}>
            Kabfi Card
          </Text>
        </View>
        <View style={{marginTop: 10, alignItems: 'center', flex: 1}}>
          <Image
            style={[
              appStyles.center,
              {height: 70, width: 70, backgroundColor: 'transparent'},
            ]}
            source={require('../../../assets/icons/kabficard.png')}
          />
        </View>
        <View
          style={{
            marginTop: 5,
            marginLeft: 30,
            marginRight: 30,
            alignItems: 'center',
            flex: 1,
          }}>
          <Image
            style={[
              appStyles.center,
              {height: 300, width: 300, backgroundColor: 'transparent'},
            ]}
            source={require('../../../assets/images/card.png')}
          />
        </View>
        <View style={{flex: 1, marginLeft: 30, marginRight: 30}}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: fontFamily.appTextRegular,
              color: '#464646',
            }}>
            You can get your discount by showing your Kabfi Card or at the
            checkout.
          </Text>
        </View>
        <View
          style={{
            marginTop: 15,
            marginLeft: 30,
            marginRight: 30,
            alignItems: 'center',
            flex: 1,
          }}>
          <Image
            style={[
              appStyles.center,
              {height: 100, width: 100, backgroundColor: 'transparent'},
            ]}
            source={require('../../../assets/icons/merc.png')}
          />
        </View>
        <View style={{flex: 1, marginTop: 10, marginLeft: 30, marginRight: 30}}>
          <Text
            style={{
              textAlign: 'center',
              color: '#464646',
              fontFamily: fontFamily.appTextRegular,
            }}>
            Sponsored by JOE & THE JUICE
          </Text>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: '#FCB040',
                height: 40,
                margin: 10,
                marginTop: 10,

                padding: 10,
                borderRadius: 20,
              }}
              onPress={() => navigation.navigate('Splash')}>
              <Text style={{textAlign: 'center', color: '#FFFFFF'}}>
                Back home
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Kabficard;
