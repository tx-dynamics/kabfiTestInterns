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

import {Buttons, Headers} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import {width} from 'react-native-dimension';

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
  // {
  //   id: '2',
  //   title: 'kabfi',
  //   profImage: require('./prof.png'),
  //   sceneImage: require('./scene.png'),
  //   heartImage: require('./heart.png'),
  //   optImage: require('./opt.png'),
  //   chatImage: require('./chat.png'),
  //   descr: '@kabfi',
  //   scenedescr: 'Wow! there is a busy crowd in Piccadilly Circius',
  // },
  // {
  //   id: '3',
  //   title: 'kabfi',
  //   profImage: require('./prof.png'),
  //   sceneImage: require('./scene.png'),
  //   heartImage: require('./heart.png'),
  //   optImage: require('./opt.png'),
  //   chatImage: require('./chat.png'),
  //   descr: '@kabfi',
  // },
  // {
  //   id: '4',
  //   title: 'kabfi',
  //   profImage: require('./prof.png'),
  //   sceneImage: require('./scene.png'),
  //   heartImage: require('./heart.png'),
  //   optImage: require('./opt.png'),
  //   chatImage: require('./chat.png'),
  //   descr: '@kabfi',
  //   scenedescr: 'Wow! there is a busy crowd in Piccadilly Circius',
  // },
  // {
  //   id: '5',
  //   title: 'kabfi',
  //   profImage: require('./prof.png'),
  //   sceneImage: require('./scene.png'),
  //   heartImage: require('./heart.png'),
  //   optImage: require('./opt.png'),
  //   chatImage: require('./chat.png'),
  //   descr: '@kabfi',
  //   scenedescr: 'Wow! there is a busy crowd in Piccadilly Circius',
  // },
  // {
  //   id: '6',
  //   title: 'kabfi',
  //   profImage: require('./prof.png'),
  //   sceneImage: require('./scene.png'),
  //   heartImage: require('./heart.png'),
  //   optImage: require('./opt.png'),
  //   chatImage: require('./chat.png'),
  //   descr: '@kabfi',
  //   scenedescr: 'Wow! there is a busy crowd in Piccadilly Circius',
  // },
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
  <View
    style={{
      flexDirection: 'column',
      backgroundColor: 'red',

      marginTop: 10,
      marginBottom: 10,
    }}>
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'powderblue',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
      <View
        style={{
          flex: 1,
          borderRadius: 10,
          height: 40,
          width: 40,
          marginLeft: 20,

          marginTop: 20,
          marginBottom: 20,
          backgroundColor: 'pink',
        }}>
        <Image source={profImage} style={{}} />
      </View>
      <View
        style={{
          flex: 2,

          alignItems: 'flex-start',
          marginTop: 20,
          marginBottom: 20,
          backgroundColor: 'orange',
        }}>
        <Text>{title}</Text>
        <Text>{descr}</Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'yellow',
        }}>
        <Image
          source={optImage}
          style={{
            height: 25,
            width: 5,
          }}
        />
      </View>
    </View>

    <View style={{flexDirection: 'row', flex: 2, backgroundColor: 'skyblue'}}>
      <View
        style={{
          flex: 1,
          marginTop: 20,
          marginBottom: 20,
          marginLeft: 20,
        }}>
        <Image
          source={sceneImage}
          style={{
            height: 60,
            width: 60,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          marginTop: 20,
          alignItems: 'flex-start',
          backgroundColor: 'green',
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
              source={require('../../../assets/icons/play.png')}
              style={{width: 10, height: 12, left: 15}}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>

    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'steelblue',
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
      <Headers.ThreeHead title=<Text>News Feed</Text> />
      <View style={{backgroundColor: 'purple'}}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
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
