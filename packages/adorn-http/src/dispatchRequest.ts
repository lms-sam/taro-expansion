/*
 * @Author: sam.li
 * @Date: 2021-10-13 15:01:19
 * @LastEditors: sam.li
 * @LastEditTime: 2021-10-15 14:16:03
 */
import utils from './utils';

export default function dispatchRequest (config) {
    config.extends = config.extends || {}; // 拓展字段
    config.headers = config.headers || {};
    config.data = config.data || {};

    const _adaptor = config.adaptor;
    delete config.adaptor;
    const _common = config.headers.common;
    delete config.headers.common;

    // 合并处理 baseURL
    if (config.baseURL && !utils.isAbsoluteURL(config.url)) {
        config.url = utils.combURL(config.baseURL, config.url);
    }

    // 合并处理 headers
    config.header = JSON.parse(
        JSON.stringify(
            utils.merge(
                {},
                _common || {},
                // config.headers[config.method] || {},
                config.headers || {},
            ),
        ),
    );
    // config.header.common && delete config.header.common;
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'].forEach((method) => {
        delete config.headers[method];
    });
    delete config.headers;
    // 上传文件的api
    const _isUpload = config.extends.isUpload;
    if (_isUpload) {
        config.filePath = config.data.filePath; // 上传路径
        config.name = config.data.fileName || 'file'; // 上传文件名,默认值file
        // 删除data参数
        config.data.fileName && delete config.data.fileName;
        config.data.filePath && delete config.data.filePath;
        // 转换data的key
        config.formData = JSON.parse(JSON.stringify(config.data));
        // 删除无用参数
        delete config.data;
    }
    delete config.extends

    return _isUpload ? _adaptor.uploadFile(config) : _adaptor.request(config);
}