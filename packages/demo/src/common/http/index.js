/*
 * @Author: sam.li
 * @Date: 2021-10-13 17:57:12
 * @LastEditors: sam.li
 * @LastEditTime: 2021-10-18 15:23:44
 */
import AdornHttp from 'adorn-http';
import Taro from '@tarojs/taro';
import requestInterceptor from './requestInterceptor';
import responseInterceptor from './responseInterceptor';

const http = AdornHttp.create({
    baseURL: 'https://www.baidu.com',
    timeout: 120000,
    headers: {
        common: {
            'Content-Type': 'application/json',
            Accept: '*/*'
        }
    },
    adaptor: {
        uploadFile: Taro.uploadFile,
        request: Taro.request
    }
});

requestInterceptor(http);
responseInterceptor(http);

export default http
