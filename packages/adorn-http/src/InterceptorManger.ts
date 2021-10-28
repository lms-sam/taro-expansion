/*
 * @Author: sam.li
 * @Date: 2021-10-13 14:49:21
 * @LastEditors: sam.li
 * @LastEditTime: 2021-10-13 14:57:51
 */
export default class InterceptorManger {
    handlers = [];
    use(fulfilled, rejected):Number {
        this.handlers.push({
            fulfilled: fulfilled,
            rejected: rejected,
        });
        return this.handlers.length - 1;
    }
    eject(id) {
        if (this.handlers[id]) {
            this.handlers[id] = null;
        }
    }
    forEach(fn: Function) {
        this.handlers.forEach((h) => {
            if (h !== null) {
                fn(h);
            }
        });
    }
}