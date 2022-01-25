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
import {Headers} from '../../../components';
import {useNavigation} from '@react-navigation/native';

const Notifications = props => {
  const navigation = useNavigation();
  return (
    // <View style={{flexDirection: 'column'}}>
    //   <View
    //     style={{
    //       flexDirection: 'row',
    //       flex: 1,
    //       borderTopLeftRadius: 20,
    //       borderTopRightRadius: 20,
    //       backgroundColor: 'skyblue',
    //     }}>
    //     <View style={{flex: 1}}>
    //       <Image style={{}} source={require('./bell.png')} />
    //     </View>
    //     <View style={{flex: 1}}>
    //       <Text style={{textAlign: 'center', color: '#6A6A6A'}}>
    //         permission to access location was denied
    //       </Text>
    //     </View>
    //   </View>
    //   <View
    //     style={{
    //       flexDirection: 'row',
    //       flex: 1,
    //       borderBottomLeftRadius: 20,
    //       borderBottomRightRadius: 20,
    //       // shadowColor: '#000000',
    //       // shadowOffset: {width: 0, height: 2},
    //       // shadowOpacity: 0.9,
    //       // shadowRadius: 3,
    //       // elevation: 3,
    //       backgroundColor: 'skyblue',
    //     }}>
    //     <View style={{flex: 1}}>
    //       <TouchableOpacity
    //         style={{
    //           backgroundColor: '#FCB040',
    //         }}
    //         onPress={''}>
    //         <Text style={{textAlign: 'center', color: '#FFFFFF'}}>LOGIN</Text>
    //       </TouchableOpacity>
    //     </View>

    //     <View style={{flex: 1}}>
    //       <TouchableOpacity
    //         style={{
    //           backgroundColor: '#FCB040',
    //         }}
    //         onPress={''}>
    //         <Text style={{textAlign: 'center', color: '#FFFFFF'}}>LOGIN</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </View>

    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <Headers.ThreeHead />
      <View
        style={{
          flex: 5,
          flexDirection: 'column',
          backgroundColor: 'transparent',
          margin: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            backgroundColor: '#FFF1DB',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.9,
            shadowRadius: 3,
            elevation: 3,
          }}>
          <View style={{flex: 1, marginRight: 20, left: 30}}>
            <Image
              source={require('../../../assets/icons/bell.png')}
              style={{
                height: 20,
                width: 20,
              }}
            />
          </View>
          <View style={{flex: 1, alignItems: 'center', right: 90}}>
            <Text style={{color: '#464646'}}>
              Permission to access location was denied.
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'transparent',
            flex: 1,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            shadowColor: '#000000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.9,
            shadowRadius: 3,
            elevation: 3,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Map')}
            style={{
              backgroundColor: '#FBFBFB',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomLeftRadius: 40,
            }}>
            <Text style={{textAlign: 'center', color: '#464646'}}>OK</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#FBFBFB',
              borderBottomRightRadius: 40,

              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}
            onPress={''}>
            <Text style={{color: '#464646'}}>Change Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#FFF1DB',
          borderRadius: 90,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 20,
          shadowColor: '#000000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.9,
          shadowRadius: 3,
          elevation: 3,
          height: '50%',
        }}>
        <View style={{flex: 1, marginRight: 20, left: 30}}>
          <Image
            source={require('../../../assets/icons/tick.png')}
            style={{
              height: 20,
              width: 20,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            alignItems: 'flex-start',
            right: 90,
          }}>
          <Text style={{textAlign: 'center', color: '#464646'}}>
            Your post was deleted
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#FFF1DB',
          borderRadius: 90,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 20,
          shadowColor: '#000000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.9,
          shadowRadius: 3,
          elevation: 3,
          height: '50%',
        }}>
        <View style={{flex: 1, marginRight: 20, left: 30}}>
          <Image
            source={require('../../../assets/icons/tick.png')}
            style={{
              height: 20,
              width: 20,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            alignItems: 'flex-start',
            right: 90,
          }}>
          <Text style={{textAlign: 'center', color: '#464646'}}>
            Post was reported
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#FFF1DB',
          borderRadius: 90,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 20,
          shadowColor: '#000000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.9,
          shadowRadius: 3,
          elevation: 3,
          height: '50%',
        }}>
        <View style={{flex: 1, marginRight: 20, left: 30}}>
          <Image
            source={require('../../../assets/icons/tick.png')}
            style={{
              height: 20,
              width: 20,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            alignItems: 'flex-start',
            right: 90,
          }}>
          <Text style={{textAlign: 'center', color: '#464646'}}>
            Your profile was updated
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Notifications;
