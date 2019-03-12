'use strict';

import {
  PixelRatio,
  Dimensions,
} from 'react-native';
import { px2dp } from '../util';

// 样式常量
export const style = {
  borderWidth: 1/PixelRatio.get(),
  topBarHeight: px2dp(40),
}
// 配置
export const basic = {
  deviceWidthDp: Dimensions.get('window').width, //设备宽，dp
  deviceHeightDp: Dimensions.get('window').height, //设备高，dp
  X_HEIGHT: 375, //iPhone X 尺寸
  X_WIDTH: 812, //iPhone X 尺寸
}