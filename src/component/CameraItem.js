import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { View, Text, Icon } from 'native-base';
import { px2dp } from '../util';
import {style} from '../config';

export default class CameraItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    // console.log(this.props)
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => {
        this.props.onPress()
      }}>
        <View style={[styles.container, this.props.style]}>
          <Icon 
            name={this.props.icon || "camera"} 
            style={[styles.camera, {color: this.props.tintColor}]} 
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: px2dp(75),
    height: px2dp(75),
    borderRadius: px2dp(75),
    backgroundColor: '#fff',
    position: "absolute",
    top: px2dp(-35),
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: {width: px2dp(5), height: px2dp(5)},
    shadowRadius: px2dp(4),
    elevation: px2dp(3.5),
  },
  camera: {
    fontSize: px2dp(50),
    color: 'black',
    opacity: 0.7,
    // position: "absolute",
    top: px2dp((75 - 50) / 2),
    zIndex: -1,
  }
})
