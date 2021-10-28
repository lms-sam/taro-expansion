/*
 * @Author: sam.li
 * @Date: 2021-06-06 11:27:33
 * @LastEditors: sam.li
 * @LastEditTime: 2021-10-15 15:00:40
 */
// request 拦截器
const interceptors = [
    // example1: async
    // response => {
    //     return response;
    // }
    // example2: sync
    // response => {
    //     return new Promise((resolve, reject) => {
    //         return response;
    //     });
    // }
    // example3: fulfilled, rejected
    // [
    //     // fulfilled
    //     response => {
    //         return response;
    //     },
    //     // rejected
    //     response => {
    //         return response;
    //     }
    // ]
    response => {
        return response.data || {};
    }
];

export default http => {
    interceptors.forEach(interceptor => {
        if (!Array.isArray(interceptor)) {
            interceptor = [interceptor];
        }
        const [fulfilled, rejected = null] = interceptor;
        http.interceptors.response.use(
            response => {
                return fulfilled(response) || response;
            },
            response => {
                return rejected ? (rejected(response) || response) : response;
            });
    });
};