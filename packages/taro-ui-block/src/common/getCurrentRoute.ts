import Taro from '@tarojs/taro';

export default () => {
    const _curPages = Taro.getCurrentPages();
    const _curPage = _curPages[_curPages.length - 1] || {};
    let routePath = '';
    if (process.env.TARO_ENV === 'h5') {
        if (_curPage.hooks.length > 0) {
            routePath = window.location.hash.replace('#', '');
        }
    }
    if (process.env.TARO_ENV === 'weapp') {
        routePath = _curPage.route;
    }
    return routePath;
};