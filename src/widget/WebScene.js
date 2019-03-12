import React, { Component } from 'react';
import { StyleSheet, WebView, InteractionManager, BackHandler, ToastAndroid } from 'react-native';
import { NavigationActions } from 'react-navigation'
import {View, Text, Icon} from "native-base";
import { px2dp, isIOS } from '../util';

class WebScene extends Component {

  static navigationOptions = ({navigation}) => ({
    // header: false,
    headerStyle: {
      backgroundColor: '#fff',
      height: px2dp(45),
      fontSize: px2dp(14)
    },
    headerLeft: () => {
      return (
        <View style={{flex: 1, flexDirection: "row", width: px2dp(80),}}>
          <Icon 
            style={[{marginLeft: px2dp(10)},{left: 0}]} 
            name="arrow-back" 
            onPress={navigation.state.params.webGoBack}
          />
          <Icon 
            style={[{marginLeft: px2dp(10)},{right: 0}]} 
            name="close" 
            onPress={navigation.state.params.routerGoBack}
          />
        </View>
      )
    },
    headerRight: (
      <View style={{marginRight: px2dp(15)}}>
        <Icon name="home" onPress={navigation.state.params.goHome} />
      </View>
    ),
    title: navigation.state.params.title,
  })

  constructor(props) {
    super(props)
    this.state = {
      source: {
        uri: ''
      },
      newUrl: "",
      newTitle: "",
      firstPage: true,
    }
  }

  componentDidMount() {
    this.onBackAndroid()
    InteractionManager.runAfterInteractions(() => {
      this.props.navigation.setParams({
        title: '页面加载中...',
        goHome: this.goHome,
        webGoBack: this.webGoBack,
        routerGoBack: this.routerGoBack,
      });
      this.setState({
        source: {
          uri: this.props.navigation.state.params.url
        },
      });
    })
    if (!isIOS) {
      this.listener = BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  componentWillUnmount() {
    if (!isIOS) {
      this.listener.remove('hardwareBackPress')
    }
  }

  onBackAndroid = () => {
    const navigation = this.props.navigation;//**************************
    console.log(navigation, NavigationActions)
    // const routers = navigation.getCurrentRoutes();
    // console.log('当前路由长度：' + routers.length);
    // if (routers.length > 2) {
    //   navigation.pop();
    //   return true;//接管默认行为
    // } else {
    //   //到了主页了
    //   if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
    //     //最近2秒内按过back键，可以退出应用。
    //     return false;
    //   }
    //   this.lastBackPressed = Date.now();
    //   ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    //   return true;
    // }
    return false;//默认行为
  }
  render() {
    return (
      <View style={styles.container}>
        <WebView
          ref="web"
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          source={this.state.source}
          onLoadEnd={(e) => this.onLoadEnd(e)}
          onNavigationStateChange={this.onNavigationStateChange}
        />
      </View>
    )
  }
  // 地址栏change事件
  onNavigationStateChange = (e) => {
    if (e.url === "about:blank" || e.title === "about:blank" && !e.canGoBack && !e.loading) {
      if (this.state.firstPage) {
        this.setState({
          firstPage: false
        })
      } else {
        this.props.navigation.goBack()
      }
    }
    this.setState({
      newUrl: e.url,
      newTitle: e.title
    })
  }
  // web页面返回
  webGoBack = () => {
    if (this.state.newUrl === "about:blank" || !this.state.newTitle === "about:blank") {
      this.props.navigation.goBack()
    }
    this.refs["web"].goBack()
  }

  onLoadEnd(e) {
    if (e.nativeEvent.title.length > 0) {
      this.props.navigation.setParams({
        title: e.nativeEvent.title
      })
    }
  }

  goHome = () => {
    // 清除历史记录并跳转
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'TabNav'})//要跳转到的页面名字
      ]
    });
    this.props.navigation.dispatch(resetAction)
  }

  routerGoBack = () => {
    this.props.navigation.goBack()
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  webView: {
    flex: 1,
    backgroundColor: 'white',
  }
})

export default WebScene;