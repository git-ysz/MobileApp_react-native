import React from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';
import { StackNavigator } from 'react-navigation';

import TabNav from './TabNav';
import CameraPage from "./pages/Camera/CameraPage";
import {WebScene} from "./widget";

import { px2dp } from './util';
import { style } from './config';

// 不使用过渡效果的路由
const transitionAnimationDisable = ['CameraPage']
const Navigator = StackNavigator(
  {
    TabNav: {
      screen: TabNav,
    },
    Web: {
      // screen: WebScene,
      // 懒加载方式
      getScreen: () => WebScene
    },
    CameraPage: {
      // screen: CameraPage,
      getScreen: () => CameraPage,
    },
  },
  {
    initialRouteName: 'TabNav',
    navigationOptions: {
      // headerBackTitle: null,
      headerTintColor: '#333333',
      showIcon: true,
      gesturesEnabled: true, //滑动返回
    },
    // 路由跳转过渡
    transitionConfig: (transitionProps,prevTransitionProps,isModal) => {
      // console.log(transitionProps,prevTransitionProps,isModal)
      if (transitionAnimationDisable.indexOf(transitionProps.scene.route.routeName) !== -1) {
        return null;
      }
      if (prevTransitionProps && transitionAnimationDisable.indexOf(prevTransitionProps.scene.route.routeName) !== -1) {
        return null;
      }
      return ({
        transitionSpec: {
          duration: 500,
          easing: Easing.out(Easing.poly(4)),
          timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
          const { layout, position, scene } = sceneProps;
          const { index } = scene;
   
          const width = layout.initWidth;
          const translateX = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [width, 0, 0],
          });
   
          const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
          });
   
          return { opacity, transform: [{ translateX }] };
        },
      })
    },
  }
)

export default Navigator