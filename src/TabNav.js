import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
// page页
import HomeScene from './pages/Home/HomeScene';
import MineScene from './pages/Mine/MineScene';
import CameraPage from "./pages/Camera/CameraPage";

// 组件
import TabBarItem from "./component/TabBarItem";
import CameraItem from "./component/CameraItem";

import { style } from './config';
import { px2dp, isIphoneX } from './util';

const TabNav = TabNavigator(
  {
    Home: {
      screen: HomeScene,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            icon={"apps"}
          />
        ),
        headerStyle: {
          height: style.topBarHeight,
        },
      }),
    },
    
    Camera: CameraPage,
    // {
    //   screen: CameraPage,
    //   navigationOptions: ({navigation}) => ({
    //     tabBarIcon: ({focused, tintColor}) => (
    //       <CameraItem
    //         tintColor={tintColor}
    //         focused={focused}
    //         icon={"camera"}
    //         onPress={() => {
    //           navigation.navigate("CameraPage")
    //           return false
    //         }}
    //       />
    //     ),
    //     headerStyle: {
    //       height: style.topBarHeight,
    //     },
    //     tabBarOnPress: ({previousScene,scene,jumpToIndex}) => {
    //       // console.log(previousScene,scene)
    //       // jumpToIndex(scene.index)
    //       navigation.navigate("CameraPage")
    //       return false
    //     },
    //   }),
    // },

    Mine: {
      screen: MineScene,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            icon={"person"}
          />
        ),
        headerStyle: {
          height: style.topBarHeight,
        }
      }),
    },
  },
  {
    initialRouteName: 'Home', //初始页
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom', //tab bar的位置, 可选值： 'top' or 'bottom'
    lazy: true, //懒加载
    animationEnabled: false, //是否在切换tab页时使用动画
    swipeEnabled: false, //是否允许滑动切换tab页
    //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
    backBehavior: 'initialRoute',
    tabBarOptions: {
      showIcon: true, //是否显示tab bar的图标，默认是false
      // activeTintColor: 'skyblue', //文本选中颜色
      // inactiveTintColor: 'gray', //未选颜色
      showLabel: false,
      // labelStyle: {}, //tab bar的文本样式
      style: { //tab bar的样式
        backgroundColor: '#ffffff',
        height: px2dp(50),
      },
      allowFontScaling: false,
      indicatorStyle: {height: 0}, //tab 页指示符的样式 (tab页下面的一条线).
      safeAreaInset: { 
        bottom: 'always', 
        top: isIphoneX ? 'always' : 'never'
      },
    },
  }
);

export default TabNav