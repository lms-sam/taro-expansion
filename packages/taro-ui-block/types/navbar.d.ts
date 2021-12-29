import StComponent from './base';
import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

export interface StNavBarProps extends StComponent {
    /**
     * 是否显示自定义标题区
     */
    isShowCon?: boolean;
    /**
     * 标题
     */
    title?: string;
    /**
     * 是否显示返回按钮
     */
    isShowBack?: boolean;
    /**
     * 是否常驻在顶部
     */
    isFix?: boolean;
    /**
     * 是否透明
     */
    isTransparency?: boolean;
    /**
     * 重定向地址，优先级高于返回事件
     */
    redirectUrl?: string;
    /**
     * 入口地址，配合返回键使用
     */
    entiesRoute?: Array<string>;
    /**
     * 是否显示右侧按钮区(仅h5)
     */
    isShowRight?: boolean;
    /**
     * 入口地址，返回事件
     */
    firstPageBack?: Function;
    /**
     * 初始化事件
     */
    initFn?: Function;
    /**
     * 右侧胶囊区的按钮，用于h5
     */
     renderRightCon?: JSX.Element | undefined;
}

export interface StNavBarState {
    menuButtonInfo: object;
    isShowBack: boolean;
}

declare const StNavBar: ComponentClass<StNavBarProps>

export default StNavBar