import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'To Eaast Ave',
    arrowImage: require('../../../assets/icons/arrow.png'),

    addr: 'Lowell Street',
    time: '10:30 AM',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'To Eaast Ave',
    arrowImage: require('../../../assets/icons/arrow.png'),

    addr: 'Oxford Street',
    time: '10:30 AM',
  },
];

const Item = ({
  title,
  arrowImage,
  addr,

  time,
  onPress,
}) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'transparent',
    }}>
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FCB040',
        margin: 20,
      }}>
      <View style={{justifyContent: 'center', margin: 10}}>
        <Text style={{fontWeight: 'bold'}}>{title}</Text>
        <Text>{addr}</Text>
        <Text>{time}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',
          margin: 10,
        }}>
        <TouchableOpacity style={{}} onPress={onPress}>
          <Image style={{}} source={arrowImage} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const Map = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      arrowImage={item.arrowImage}
      time={item.time}
      addr={item.addr}
      onPress={() => navigation.navigate('Feedback1')}
    />
  );

  return (
    <SafeAreaView style={{}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Map;
