import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {fontFamily} from '../../services';

const BottomSheet = () => {
  const navigation = useNavigation();
  return (
    <View style={{margin: 30}}>
      <View style={{flexDirection: 'row', marginBottom: 30}}>
        <Image
          style={{marginRight: 10}}
          source={require('../../assets/images/prof.png')}></Image>
        <View>
          <Text
            style={{
              fontFamily: fontFamily.appTextBold,
              color: '#464646',
              marginRight: 10,
            }}>
            John Thompson
          </Text>
          <Text
            style={{fontFamily: fontFamily.appTextRegular, color: '#464646'}}>
            4.92 *
          </Text>
        </View>
        <Text style={{fontFamily: fontFamily.appTextRegular, color: '#464646'}}>
          Member Since 2021
        </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 20, width: 20, marginRight: 5, marginLeft: 5}}
          source={require('../../assets/icons/editprof.png')}></Image>
        <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
          <Text
            style={{fontFamily: fontFamily.appTextRegular, color: '#464646'}}>
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>

      <Image
        style={{marginTop: 10, marginBottom: 10}}
        source={require('../../assets/icons/line.png')}></Image>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{marginRight: 5, height: 20, width: 20, marginLeft: 5}}
          source={require('../../assets/icons/editprof.png')}></Image>
        <Text style={{fontFamily: fontFamily.appTextRegular, color: '#464646'}}>
          Kab Card
        </Text>
      </View>
      <Image
        style={{marginTop: 10, marginBottom: 10}}
        source={require('../../assets/icons/line.png')}></Image>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 20, width: 20, marginRight: 5, marginLeft: 5}}
          source={require('../../assets/icons/refer-taxi.png')}></Image>
        <Text style={{fontFamily: fontFamily.appTextRegular, color: '#464646'}}>
          Refer a taxicab driver
        </Text>
      </View>
      <Image
        style={{marginTop: 10, marginBottom: 10}}
        source={require('../../assets/icons/line.png')}></Image>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 20, width: 20, marginRight: 5, marginLeft: 5}}
          source={require('../../assets/icons/hotspot.png')}></Image>
        <Text style={{fontFamily: fontFamily.appTextRegular, color: '#464646'}}>
          Hot Spots
        </Text>
      </View>
      <Image
        style={{marginTop: 10, marginBottom: 10}}
        source={require('../../assets/icons/line.png')}></Image>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 20, width: 20, marginRight: 5, marginLeft: 5}}
          source={require('../../assets/icons/editprof.png')}></Image>
        <TouchableOpacity onPress={() => navigation.navigate('Planner')}>
          <Text
            style={{fontFamily: fontFamily.appTextRegular, color: '#464646'}}>
            Planner
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        style={{marginTop: 10, marginBottom: 10}}
        source={require('../../assets/icons/line.png')}></Image>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 20, width: 20, marginRight: 5, marginLeft: 5}}
          source={require('../../assets/icons/settings.png')}></Image>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text
            style={{fontFamily: fontFamily.appTextRegular, color: '#464646'}}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        style={{marginTop: 10, marginBottom: 10}}
        source={require('../../assets/icons/line.png')}></Image>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 20, width: 20, marginRight: 5, marginLeft: 5}}
          source={require('../../assets/icons/feedback.png')}></Image>
        <Text style={{fontFamily: fontFamily.appTextRegular, color: '#464646'}}>
          Feedback
        </Text>
      </View>
      <Image
        style={{marginTop: 10, marginBottom: 10}}
        source={require('../../assets/icons/line.png')}></Image>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 20, width: 20, marginRight: 5, marginLeft: 5}}
          source={require('../../assets/icons/help.png')}></Image>
        <Text style={{fontFamily: fontFamily.appTextRegular, color: '#464646'}}>
          Help
        </Text>
      </View>
      <Image
        style={{marginTop: 10, marginBottom: 10}}
        source={require('../../assets/icons/line.png')}></Image>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 20, width: 20, marginRight: 5, marginLeft: 5}}
          source={require('../../assets/icons/legal.png')}></Image>
        <Text style={{fontFamily: fontFamily.appTextRegular, color: '#464646'}}>
          Legal
        </Text>
      </View>
    </View>
  );
};
export default BottomSheet;
