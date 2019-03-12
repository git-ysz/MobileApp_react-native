/**
 * 公共方法
 * 
 */
import { Dimensions, PixelRatio, Platform } from 'react-native';
import {basic} from "../config"

// const deviceWidthDp = Dimensions.get('window').width;
// const deviceHeightDp = Dimensions.get('window').height;

//  获取路由title
export function getCurrentRouteName(navigationState) {
  if (!navigationState) {
      return null
  }
  const route = navigationState.routes[navigationState.index]
  // dive into nested navigators
  if (route.routes) {
      return getCurrentRouteName(route)
  }
  return route.routeName
}

// 判断是否是iPhone
export function isIOS() {
    return (Platform.OS === 'ios')
}

// 判断是否是iPhone X
export function isIphoneX() {
    return (
        isIOS() &&
        ((basic.deviceHeightDp === basic.X_HEIGHT && basic.deviceWidthDp === basic.X_WIDTH) ||
        (basic.deviceHeightDp === basic.X_WIDTH && basic.deviceWidthDp === basic.X_HEIGHT))
    )
}
