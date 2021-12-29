import StComponent from "./base";
import { MouseEvent, ComponentClass } from "react";
import { CommonEventFunction, BaseEventOrig, Target } from "@tarojs/components/types/common";
import { StNavBarProps } from "./navbar";

export interface StBaseLayoutProps extends StComponent {
  /**
   * 导航栏标题
   */
  title?: string;
  /**
   * 顶部导航栏颜色 & 状态栏颜色
   */
  barStyle?: "black" | "white";
    /**
     * 是否改变状态栏颜色
     */
  isToggleBarStyle?: boolean;
  /**
   * 是否隐藏标题，在
   */
  isHideTitleBeforeToggle?: boolean;
    /**
     * 内容区的额外的类名、用于重写样式
     */
  contentClass?: string;
  /**
   * 是否全屏（导航栏fix，透明，文案白色）
   */
  isFullScreen?: boolean;
  /**
   * 全屏的显示边界值
   */
  scrollTopBoundary?: number;
  /**
   * 内容区的滚动事件
   */
  onScroll?: CommonEventFunction;
  /**
   * 顶部固定区，在导航栏下面常驻，压缩内容区
   */
  renderTop?: JSX.Element | undefined;
  /**
   * 底部固定区，常驻在底部，压缩内容区
   */
  renderBottom?: JSX.Element | undefined;
  /**
   * 透传导航栏参数
   */
  navOptions?: StNavBarProps;
}

export interface StBaseLayoutState {
  isNavFixed: boolean;
  isNavTransparency: boolean;
  layoutScrollTop: number;
  pageTitle: string | undefined;
}

declare const StBaseLayout: ComponentClass<StBaseLayoutProps>;

export default StBaseLayout;

interface ScollTarge extends Target{
  scrollTop: number;
  offsetLeft: number;
  offsetTop: number;
  scrollHeight: number;
  scrollLeft: number;
  scrollWidth: number;
}

export interface ScrollEvent extends BaseEventOrig<any> {
  target: ScollTarge
}
