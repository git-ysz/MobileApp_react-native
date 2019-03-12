import React, { Component } from 'react';
import { StyleSheet, Vibration } from 'react-native';
import { View, Text, Button } from 'native-base';
import { px2dp, NavigationService } from '../../util';

export default class Mine extends Component {
  static navigationOptions = {
    tabBarLabel: 'Mine'
  };

  constructor(props) {
    super(props)
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text>
          MinePage
        </Text>
        <Button onPress={() => {
          Vibration.vibrate([1000,1000], true)
          console.log("震动了")
        }}>
          <Text>震动一下试试？？</Text>
        </Button>
        
        <Button onPress={() => {
          Vibration.cancel()
          console.log("停下来了")
        }}>
          <Text>停止震动！！</Text>
        </Button>

        <Button onPress={() => {
          NavigationService.navigate("Web", {url: "https://www.baidu.com"})
          console.log("百度")
        }}>
          <Text>百度</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
});