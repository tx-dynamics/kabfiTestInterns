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
  ImageBackground,
} from 'react-native';

import {width, height, totalSize} from 'react-native-dimension';
import {Cards, Headers} from '../../../components';

const DATAVerti = [
  {
    id: '1',
    title: 'Alexander 23 (2021)',
    time: 'Tomorrow',
    date: 'Wed, 15 Sept',
    profImage: require('../../../assets/images/discover.png'),
  },
  {
    id: '2',
    title: 'Alexander 23 (2021)',
    time: 'Tomorrow',
    date: 'Wed, 15 Sept',
    profImage: require('../../../assets/images/discover.png'),
  },
  {
    id: '3',
    title: 'Alexander 23 (2021)',
    time: 'Tomorrow',
    date: 'Wed, 15 Sept',
    profImage: require('../../../assets/images/discover.png'),
  },
];

const DATAHori = [
  {
    id: '1',
    title: 'Ricky Gervais',
    time: 'Tomorrow',
    date: 'Wed, 15 Sept',
    profImage: require('../../../assets/images/ricky-gervais.png'),
  },
  {
    id: '2',
    title: 'Ricky Gervais',
    time: 'Tomorrow',
    date: 'Wed, 15 Sept',
    profImage: require('../../../assets/images/ricky-gervais.png'),
  },
  {
    id: '3',
    title: 'Ricky Gervais',
    time: 'Tomorrow',
    date: 'Wed, 15 Sept',
    profImage: require('../../../assets/images/ricky-gervais.png'),
  },
  {
    id: '4',
    title: 'Ricky Gervais',
    time: 'Tomorrow',
    date: 'Wed, 15 Sept',
    profImage: require('../../../assets/images/ricky-gervais.png'),
  },
];
const HoriItem = ({
  title,
  time,
  date,
  profImage,

  pressor,

  onPress,
}) => (
  <Cards.HoriScroCard
    title={title}
    time={time}
    date={date}
    profImage={profImage}
    pressor={pressor}
  />
);

const VertiItem = ({
  title,
  time,
  date,
  profImage,

  pressor,

  onPress,
}) => (
  <Cards.VertiScroCard
    title={title}
    time={time}
    date={date}
    profImage={profImage}
    pressor={pressor}
  />
);
const Planner = () => {
  const renderHoriItem = ({item}) => (
    <HoriItem
      title={item.title}
      time={item.time}
      date={item.date}
      profImage={item.profImage}
      pressor={() => {
        console.log('Ok pressed');
      }}
      onPress={() => {}}
    />
  );

  const renderVertiItem = ({item}) => (
    <VertiItem
      title={item.title}
      time={item.time}
      date={item.date}
      profImage={item.profImage}
      pressor={() => {
        console.log('Ok pressed');
      }}
      onPress={() => {}}
    />
  );
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Headers.TwoHead title={<Text>Planner</Text>} />
      <Text style={{fontWeight: 'bold', margin: 10}}>
        Upcoming Events in London
      </Text>
      <Text style={{marginLeft: 10, marginBottom: 10}}>
        There's so much happening in London all this month round{' '}
      </Text>

      <View style={{height: height(35)}}>
        <FlatList
          data={DATAHori}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={renderHoriItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Text style={{fontWeight: 'bold', margin: 10}}>Discover</Text>

      <FlatList
        data={DATAVerti}
        pagingEnabled
        renderItem={renderVertiItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Planner;
