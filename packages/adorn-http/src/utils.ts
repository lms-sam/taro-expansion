/*
 * @Author: sam.li
 * @Date: 2021-06-01 15:36:59
 * @LastEditors: sam.li
 * @LastEditTime: 2021-10-13 15:29:19
 */
function bind(fn:Function, thisArg:any) {
    return function () {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
    };
}

function forEach(obj:any, fn: Function) {
    if (obj === null || typeof obj === 'undefined') {
        return;
    }

    if (typeof obj !== 'object') {
        obj = [obj];
    }
    if (Object.prototype.toString.call(obj) === '[object Array]') {
        for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
        }
    } else {
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                fn.call(null, obj[key], key, obj);
            }
        }
    }
}

function merge(...args) {
    var result = {};
    function assignValue(val:any, key: string) {
        if (typeof result[key] === 'object' && typeof val === 'object') {
            result[key] = merge(result[key], val);
        } else {
            result[key] = val;
        }
    }
    for (var i = 0, l = args.length; i < l; i++) {
        forEach(args[i], assignValue);
    }
    return result;
}

export default {
    bind: bind,
    forEach: forEach,
    merge: merge,
    extend: function (a, b, thisArg) {
        forEach(b, function (val, key) {
            if (thisArg && typeof val === 'function') {
                a[key] = bind(val, thisArg);
            } else {
                a[key] = val;
            }
        });
        return a;
    },
    // 合并URL
    combURL: function (baseURL:string, relativeURL:string): string {
        return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
    },
    // 判断是否是绝对URL
    isAbsoluteURL: function (url) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
    },
};
