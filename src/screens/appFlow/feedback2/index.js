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

const Feedback2 = props => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            marginTop: 50,
            marginBottom: 30,
          }}>
          <View style={{flex: 1, alignItems: 'center', right: 50}}>
            <Image
              style={{}}
              source={require('../../../assets/icons/face1.png')}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              right: 100,
            }}>
            <Text style={{}}>What made you angry?</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FCB040',
              height: 40,
              margin: 12,

              padding: 10,
              borderRadius: 20,
            }}
            onPress={() => navigation.navigate('Kabficard')}>
            <Text style={{textAlign: 'center', color: '#FFFFFF'}}>
              Ease of use
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              height: 40,
              margin: 12,

              borderColor: '#FCB040',
              borderWidth: 1,
              padding: 10,
              borderRadius: 20,
            }}
            onPress={''}>
            <Text style={{textAlign: 'center', color: '#FCB040'}}>
              Usefulness
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              height: 40,
              margin: 12,
              borderColor: '#FCB040',
              borderWidth: 1,
              padding: 10,
              borderRadius: 20,
            }}
            onPress={''}>
            <Text style={{textAlign: 'center', color: '#FCB040'}}>
              Technical Performance{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              height: 40,
              margin: 12,
              borderColor: '#FCB040',
              borderWidth: 1,
              padding: 10,
              borderRadius: 20,
            }}
            onPress={''}>
            <Text style={{textAlign: 'center', color: '#FCB040'}}>
              Application design
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              height: 40,
              margin: 12,
              borderColor: '#FCB040',
              borderWidth: 1,
              padding: 10,
              borderRadius: 20,
            }}
            onPress={''}>
            <Text style={{textAlign: 'center', color: '#FCB040'}}>Other</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFFFFF',
                height: 40,
                margin: 12,
                borderColor: '#FCB040',
                borderWidth: 1,
                padding: 10,
                borderRadius: 20,
              }}
              onPress={''}>
              <Text style={{textAlign: 'center', color: '#FCB040'}}>
                Previous
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFFFFF',
                height: 40,
                margin: 12,
                borderColor: '#FCB040',
                borderWidth: 1,
                padding: 10,
                borderRadius: 20,
              }}
              onPress={''}>
              <Text style={{textAlign: 'center', color: '#FCB040'}}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View></View>
      </View>
    </ScrollView>
  );
};

export default Feedback2;
