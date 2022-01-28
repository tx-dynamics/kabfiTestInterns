import React, {useRef} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import Sheet from '../bottomsheet/index';

export const TwoHead = ({title, navigation, onPress}) => {
  const bottomSheet = useRef();
  return (
    <View
      style={{
        // justifyContent: "space-around",
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
        width: '100%',
        height: 50,
        // alignItems: "center",
      }}>
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={500} radius={35}>
        <Sheet />
      </BottomSheet>
      <View
        style={{
          //   borderWidth: 1,
          width: '20%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {title == 'Planner' ? (
          <TouchableOpacity onPress={() => bottomSheet.current.show()}>
            <Image style={{}} source={require('../../assets/icons/menu.png')} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onPress}>
            <Image style={{}} source={require('../../assets/icons/back.png')} />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          //   borderWidth: 1,
          width: '60%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {title}
      </View>
    </View>
  );
};

export const ThreeHead = ({title, navigation, onPress, Text}) => {
  const bottomSheet = useRef();
  return (
    <View
      style={{
        // justifyContent: "space-around",
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
        width: '100%',
        height: 50,
        // alignItems: "center",
      }}>
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={500} radius={35}>
        <Sheet />
      </BottomSheet>
      <View
        style={{
          //   borderWidth: 1,
          width: '20%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => bottomSheet.current.show()}>
          <Image style={{}} source={require('../../assets/icons/menu.png')} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          //   borderWidth: 1,
          width: '60%',
          height: 50,
          alignItems: 'center',
        }}>
        {title}
      </View>
      <View
        style={{
          //   borderWidth: 1,
          width: '20%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={onPress}>
          <Image style={{}} source={require('../../assets/icons/bell.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const ThreeTextHead = ({
  title,
  navigation,
  onPress,
  textLeft,
  textRight,
}) => {
  const bottomSheet = useRef();
  return (
    <View
      style={{
        // justifyContent: "space-around",
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
        width: '100%',
        height: 50,
        // alignItems: "center",
      }}>
      <View
        style={{
          //   borderWidth: 1,
          width: '20%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => bottomSheet.current.show()}>
          <Text>{textLeft}</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          //   borderWidth: 1,
          width: '60%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {title}
      </View>
      <View
        style={{
          //   borderWidth: 1,
          width: '20%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={onPress}>
          <Text>{textRight}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
