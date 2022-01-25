import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Splash from './src/screens/authFlow/splash';
import Signup from './src/screens/authFlow/signup';
import Signin from './src/screens/authFlow/signin';
import Verify from './src/screens/authFlow/verify';
import Chekmail from './src/screens/authFlow/chekmail';
import Forgotpass from './src/screens/authFlow/forgotpass';
import Otp from './src/screens/authFlow/otp';
import Feedback1 from './src/screens/appFlow/feedback1';
import Feedback2 from './src/screens/appFlow/feedback2';
import Newsfeed from './src/screens/appFlow/newsfeed';
import Notifications from './src/screens/appFlow/notifications';
import Kabficard from './src/screens/appFlow/kabficard';
import Map from './src/screens/appFlow/map';
import MainContainer from './src/services/navigation/index';
import {appStyles} from './src/services';
import {Icons} from './src/components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      backgroundColor: 'white',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 5000);
    setTimeout(() => {
      this.setState({backgroundColor: 'black'});
    }, 3000);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* {this.state.isLoading ? (
          <View
            style={{
              ...appStyles.center,
              flex: 1,
              backgroundColor: this.state.backgroundColor,
            }}>
            <Icons.AppIcon />
          </View>
        ) : (
          <Splash />
        )} */}
        {/* <Splash /> */}
        {/* <Signup /> */}
        {/* <Signin /> */}
        {/* <Verify /> */}
        {/* <Chekmail /> */}
        {/* <Forgotpass /> */}
        {/* <Feedback2 /> */}
        {/* <Newsfeed /> */}
        {/* <Kabficard /> */}
        {/* <Map /> */}
        {/* <Otp /> */}
        {/* <Feedback1 /> */}
        {/* <Notifications /> */}
        <MainContainer />
      </SafeAreaView>
    );
  }
}

export default App;
