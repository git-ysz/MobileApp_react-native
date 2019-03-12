/**
 * 导航
 * 
 */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button, Icon } from 'native-base';
import {px2dp} from "../util"

export default class TabBarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { focused, tintColor, icon } = this.props
    return (
      <View style={{ tintColor: tintColor }}>
        <Icon name={icon} style={[{color: focused ? 'skyblue' : 'gray'},styles.icon]}></Icon>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    fontSize: px2dp(35),
  }
});