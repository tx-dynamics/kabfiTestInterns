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

const Feedback1 = props => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{flexDirection: 'column'}}>
        <View style={{flex: 1}}>
          <Text
            style={{
              marginTop: 50,
              color: '#464646',
              fontFamily: fontFamily.appTextBold,
            }}>
            Share your feedback
          </Text>
          <Text
            style={{
              marginTop: 50,
              color: '#464646',
              fontFamily: fontFamily.appTextRegular,
            }}>
            How you satisfied are you with KABFI?
          </Text>
        </View>
        <View style={{marginTop: 50, alignItems: 'center', flex: 1}}>
          <Image
            style={[appStyles.center, {backgroundColor: 'transparent'}]}
            source={require('../../../assets/icons/star.png')}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 40,
            alignItems: 'center',
          }}>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Feedback2')}>
              <Image
                style={{}}
                source={require('../../../assets/icons/face1.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity>
              <Image
                style={{}}
                source={require('../../../assets/icons/face2.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <TouchableOpacity>
              <Image
                style={{}}
                source={require('../../../assets/icons/face3.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Feedback1;
