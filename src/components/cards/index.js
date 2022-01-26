import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Modal,
  TouchableOpacity,
} from 'react-native';

export const NotifiCard = () => {
  return (
    <View
      style={{
        flex: 5,
        flexDirection: 'column',
        backgroundColor: 'transparent',
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
            source={require('../../assets/icons/bell.png')}
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
          style={{
            backgroundColor: '#FBFBFB',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomLeftRadius: 40,
          }}
          onPress={''}>
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
  );
};

export const FeedbackCard = ({
  title,
  profImage,
  descr,
  pressor,
  sceneImage,
  heartImage,
  optImage,
  chatImage,
  scenedescr,
  onPress,
}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: 'transparent',

        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          backgroundColor: '#FBFBFB',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          alignItems: 'center',

          flexWrap: 'wrap',
        }}>
        <Image
          source={profImage}
          style={{
            borderRadius: 10,
            height: 40,
            width: 40,
            marginLeft: 20,
            marginTop: 20,
            marginBottom: 20,
          }}
        />

        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 10,
          }}>
          <Text>{title}</Text>
          <Text>{descr}</Text>
        </View>

        <Image
          source={optImage}
          style={{
            height: 25,
            width: 5,
            marginLeft: 190,
          }}
        />
      </View>

      <View style={{flexDirection: 'row', flex: 2, backgroundColor: '#FBFBFB'}}>
        <Image
          source={sceneImage}
          style={{
            height: 60,
            width: 60,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 20,
          }}
        />

        <View
          style={{
            flexDirection: 'column',
            flex: 1,
            marginTop: 10,
            marginLeft: 10,
            alignItems: 'flex-start',

            flex: 2,
          }}>
          <View style={{flex: 1}}>
            <Text>{scenedescr}</Text>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FBFBFB',
                height: 25,
                width: 150,
                marginTop: 5,
                alignItems: 'flex-start',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#E3E3E3',
                borderRadius: 20,
              }}
              onPress={onPress}>
              <Image
                source={require('../../assets/icons/play.png')}
                style={{width: 10, height: 12, left: 15}}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#F1F1F1',
          flex: 1,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'center',
            margin: 20,
          }}>
          <TouchableOpacity onPress={onPress}>
            <Image
              source={heartImage}
              style={{
                height: 20,
                width: 23,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'center',
            right: 90,
            margin: 20,
          }}>
          <TouchableOpacity>
            <Image
              source={chatImage}
              style={{
                height: 20,
                width: 20,
                left: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
