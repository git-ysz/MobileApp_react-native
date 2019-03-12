/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { StyleProvider, View } from 'native-base';

// 工具类
import getTheme from '../native-base-theme/components';
import commonColor from '../native-base-theme/variables/commonColor';

import Navigator from "./Navigator";
import { basic } from './config';
import { px2dp, NavigationService } from './util';

class App extends Component {

  constructor() {
    super()
    this.state = {
    };
    // StatusBar.setBarStyle('dark-content')
    StatusBar.setBarStyle('light-content')
  }

  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <View style={{width: '100%',height: '100%'}}>
          <Navigator
            screenProps={{
              user: {
                name: '张三',
                baiduToken: ""
              }
            }}
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </View>
      </StyleProvider>
    );
  }
  componentDidMount() {

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App