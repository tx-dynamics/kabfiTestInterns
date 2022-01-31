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

import {Buttons, Cards, Headers} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import {width} from 'react-native-dimension';
import {fontFamily} from '../../../services';

const DATA = [
  {
    id: '1',
    title: 'oakley',
    profImage: require('../../../assets/images/prof.png'),
    sceneImage: require('../../../assets/images/scene.png'),
    heartImage: require('../../../assets/icons/heart.png'),
    optImage: require('../../../assets/icons/opt.png'),
    chatImage: require('../../../assets/icons/chat.png'),
    descr: '@oakley',
    scenedescr: 'Wow! there is a busy crowd in Piccadilly Circius...',
  },
  {
    id: '2',
    title: 'oakley',
    profImage: require('../../../assets/images/prof.png'),
    sceneImage: require('../../../assets/images/scene.png'),
    heartImage: require('../../../assets/icons/heart.png'),
    optImage: require('../../../assets/icons/opt.png'),
    chatImage: require('../../../assets/icons/chat.png'),
    descr: '@oakley',
    scenedescr: 'Wow! there is a busy crowd in Piccadilly Circius...',
  },
  {
    id: '3',
    title: 'oakley',
    profImage: require('../../../assets/images/prof.png'),
    sceneImage: require('../../../assets/images/scene.png'),
    heartImage: require('../../../assets/icons/heart.png'),
    optImage: require('../../../assets/icons/opt.png'),
    chatImage: require('../../../assets/icons/chat.png'),
    descr: '@oakley',
    scenedescr: 'Wow! there is a busy crowd in Piccadilly Circius...',
  },
  {
    id: '4',
    title: 'oakley',
    profImage: require('../../../assets/images/prof.png'),
    sceneImage: require('../../../assets/images/scene.png'),
    heartImage: require('../../../assets/icons/heart.png'),
    optImage: require('../../../assets/icons/opt.png'),
    chatImage: require('../../../assets/icons/chat.png'),
    descr: '@oakley',
    scenedescr: 'Wow! there is a busy crowd in Piccadilly Circius...',
  },
  {
    id: '5',
    title: 'oakley',
    profImage: require('../../../assets/images/prof.png'),
    sceneImage: require('../../../assets/images/scene.png'),
    heartImage: require('../../../assets/icons/heart.png'),
    optImage: require('../../../assets/icons/opt.png'),
    chatImage: require('../../../assets/icons/chat.png'),
    descr: '@oakley',
    scenedescr: 'Wow! there is a busy crowd in Piccadilly Circius...',
  },
  {
    id: '6',
    title: 'oakley',
    profImage: require('../../../assets/images/prof.png'),
    sceneImage: require('../../../assets/images/scene.png'),
    heartImage: require('../../../assets/icons/heart.png'),
    optImage: require('../../../assets/icons/opt.png'),
    chatImage: require('../../../assets/icons/chat.png'),
    descr: '@oakley',
    scenedescr: 'Wow! there is a busy crowd in Piccadilly Circius...',
  },
];

const Item = ({
  title,
  profImage,
  descr,
  pressor,
  sceneImage,
  heartImage,
  optImage,
  chatImage,
  onPress,
  scenedescr,
}) => (
  <Cards.FeedbackCard
    title={title}
    heartImage={heartImage}
    profImage={profImage}
    optImage={optImage}
    sceneImage={sceneImage}
    chatImage={chatImage}
    descr={descr}
    scenedescr={scenedescr}
    onPress={onPress}
  />
);

const Newsfeed = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      heartImage={item.heartImage}
      profImage={item.profImage}
      optImage={item.optImage}
      sceneImage={item.sceneImage}
      chatImage={item.chatImage}
      descr={item.descr}
      scenedescr={item.scenedescr}
      onPress={() => navigation.navigate('Notifications')}
      pressor={() => {
        console.log('Tapped', item);
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Headers.ThreeHead
        title={
          <Text style={{fontFamily: fontFamily.appTextBold, color: '#464646'}}>
            News Feed
          </Text>
        }
      />

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <ActionButton offsetY={100} buttonColor="rgb(252, 176, 64)">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="New Post"
          onPress={() => console.log('notes tapped!')}>
          <Icon name="md-create" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Notifications"
          onPress={() => {}}>
          <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  item: {
    backgroundColor: 'blue',
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 12,
  },
});

export default Newsfeed;
