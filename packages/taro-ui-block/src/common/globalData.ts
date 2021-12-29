/*
 * @Date: 2019-12-05 17:12:39
 * @LastEditors: sam.li
 * @LastEditTime: 2019-12-05 17:12:41
 */
/**
 * 这里需要用全局方法getApp()中的tempData来处理 (共享方法),否则有些方法执行两次
 * 但是 getAPP()方法执行需要在特定的生命周期后(onLaunch())处理
 */

const globalData = {};
const hasOwn = function(obj:object, key: string) {
  return !!Object.prototype.hasOwnProperty.call(obj, key);
};
export default {
  set: function(key:string, value: any) {
    globalData[key] = value;
  },
  get: function(key: string) {
    try {
      return globalData[key];
    } catch (e) {
      console.warn(e);
    }
  },
  remove: function(key:string) {
    if (hasOwn(globalData, key)) {
      delete globalData[key];
    }
  },
};
