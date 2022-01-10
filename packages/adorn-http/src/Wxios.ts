/*
 * @Author: sam.li
 * @Date: 2021-10-13 14:08:37
 * @LastEditors: sam.li
 * @LastEditTime: 2021-10-15 12:08:51
 */
import utils from './utils'
import dispatchRequest from './dispatchRequest'
import InterceptorManger from './InterceptorManger'
import {configInterface} from 'types/index';

interface configFac {
    method?: string;
    data?: Object;
    url: string;
    headers?: Object;
}
export default class Wxios {
    handlers = [];
    interceptors = {}
    defaults = {
        url: '',
        method: 'get',
    }
    getTaskCallBackQueue = []
    constructor(config: configInterface) {
        this.defaults = config;
        this.interceptors = {
            request: new InterceptorManger(),
            response: new InterceptorManger(),
        };
        this.getTaskCallBackQueue = [];
    }
    request(config:configFac) {
        let _httpPromiseIndex = 0; //
        if (typeof config === 'string') {
            config = Object.assign(
                {
                    url: arguments[0],
                },
                arguments[1] || {},
            );
        }
        config = utils.merge(
            {},
            this.defaults,
            {
                method: 'get',
            },
            config,
        );
        config.method = config.method.toLowerCase();
        var chain = [dispatchRequest, undefined];
        var promise = Promise.resolve(config);
        this.interceptors.request.forEach((interceptor) => {
            _httpPromiseIndex++;
            chain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        this.interceptors.response.forEach((interceptor) => {
            chain.push(interceptor.fulfilled, interceptor.rejected);
        });
        while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
            _httpPromiseIndex--;
            if (_httpPromiseIndex === 0) {
                this.getTaskCallBackQueue.map((callBack) => {
                    callBack(promise);
                }); // 执行注入的获取task回调函数
            }
        }
        return promise;
    }
}


['delete', 'get', 'head', 'options', 'post', 'put', 'patch'].forEach((method) => {
    Wxios.prototype[method] = function (url:string, data: object, config:object) {
        const _config = Object.assign(config || {}, { method: method, url: url, data: data });
        return this.request(_config);
    };
});