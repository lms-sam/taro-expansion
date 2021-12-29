/*
 * @description 路由中间层
 * @Date: 2019-10-18 14:46:49
 * @LastEditors: sam.li
 * @LastEditTime: 2021-05-17 10:40:03
 */
import Taro from "@tarojs/taro";
/**
 * @description: 路由跳转
 * @param {type}
 * @return:
 */
export const navigateTo = (options) => {
  Taro.navigateTo(options);
};
/**
 * @description: 刷新应用、app回到首页
 * @param {type}
 * @return:
 */
export const reLaunch = (options) => {
  if (process.env.TARO_ENV === "weapp") {
    Taro.reLaunch(options);
  }
  // if(process.env.TARO_ENV === 'h5'){
  //     // origin + pathname + '#/pages/index/index'
  //     openNewWebView(getIndexRouter(options.url,true))
  // }
};
/**
 * @description: 重定向页面
 * @param {type}
 * @return:
 */
export const redirectTo = (options) => {
  Taro.redirectTo(options);
};
/**
 * @description: 路由返回
 * @param {type}
 * @return:
 */
export const back = (delta: number = 1) => {
  console.log(
    `当前路由栈深度:${Taro.getCurrentPages().length},返回层级:[${delta}]`
  );
  Taro.navigateBack({
    delta,
  });
};

/**
 * @description: 跳到收银台、小程序跳到小程序页面，app跳到sdk，h5跳到h5的收银台
 * @param {type}
 * @return:
 */
