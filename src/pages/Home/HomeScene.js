import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button } from 'native-base';

export default class Home extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    // header: false
  };

  constructor(props) {
    super(props)
    this.state = {
    };
  }

  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Text>
          HomePage
          {this.props.screenProps.user.name}
        </Text>
        <Button info block onPress={() => {
          navigation.navigate("Web", {url: 'http://yszblog.vip/'})
        }}>
          <Text>路由跳转至H5页面</Text>
        </Button>
      </View>
    )
  }

  componentDidMount() {

  }
}

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // height: '100%',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});