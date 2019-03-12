'use strict';

import { Dimensions, PixelRatio } from 'react-native';

const deviceWidthDp = Dimensions.get('window').width;
const uiWidthPx = 375; //设计图宽度

export function px2dp(uiElementPx) {
    return uiElementPx *  deviceWidthDp / uiWidthPx;
}
