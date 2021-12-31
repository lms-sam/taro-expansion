import Taro from '@tarojs/taro';

Taro.initPxTransform({ designWidth: 750, deviceRatio: {} });

export { default as StNavBar } from './components/nav-bar/index';
export { default as StBaseLayout } from './components/base-layout/index';
