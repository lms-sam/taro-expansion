import Taro from "@tarojs/taro";
import { View, ScrollView, Text } from "@tarojs/components";
import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import { StBaseLayoutProps, StBaseLayoutState, ScrollEvent } from "types/base-layout";
import StComponent from "../../common/component";
import NavBar from "../nav-bar";

import "./index.scss";

export default class StBaseLayout extends StComponent<
  StBaseLayoutProps,
  StBaseLayoutState
> {
  public static defaultProps: StBaseLayoutProps;
  public static propTypes: InferProps<StBaseLayoutProps>;
  private _currentBarStyle: string = "black";

  constructor(props: StBaseLayoutProps) {
    super(props);
    this.state = {
      isNavFixed: false,
      isNavTransparency: false,
      layoutScrollTop: -1,
      pageTitle: props.title,
    };
    this._currentBarStyle = props.barStyle || "black";
  }
  private toggleBarStyle(newBarStyle) {
    if (this._currentBarStyle === newBarStyle) return;
    const barColor = newBarStyle === "white" ? "#ffffff" : "#000000";
    Taro.setNavigationBarColor({
      frontColor: barColor,
      backgroundColor: barColor,
    });
    this._currentBarStyle = newBarStyle;
  }

  private handleScroll = (event: ScrollEvent) => {
    this.props.onScroll && this.props.onScroll(event);
    const {
      isFullScreen,
      barStyle,
      scrollTopBoundary = 21,
      isToggleBarStyle,
    } = this.props;
    if (!isFullScreen) return;
    const barStyle2 = barStyle === "white" ? "black" : "white";
    if (event.target.scrollTop > scrollTopBoundary) {
      this.setState({ isNavTransparency: false });
      // 电池状态修改颜色
      isToggleBarStyle && this.toggleBarStyle(barStyle2);
    } else {
      this.setState({ isNavTransparency: true });
      isToggleBarStyle && this.toggleBarStyle(barStyle);
    }
  };

  render(): JSX.Element {
    const {
      isNavFixed,
      isNavTransparency,
      layoutScrollTop,
      pageTitle
    } = this.state;
    const {
      contentClass,
      className,
      navOptions,
      isHideTitleBeforeToggle,
      isHideNav
    } = this.props;
    return (
      <View className={classnames("StBaseLayout-wrapper", className)}>
        {!isHideNav && <NavBar
          title={isNavTransparency && isHideTitleBeforeToggle ? "" : pageTitle}
          isFix={isNavFixed}
          isTransparency={isNavTransparency}
          {...navOptions}
          isShowRight={true}
          renderRightCon={this.props.renderRightCon}
        />}
        {this.props.renderTop}
        <View className={classnames("StBaseLayout-wrapper_container", contentClass)}>
          {process.env.TARO_ENV === "weapp" && (
            <ScrollView
              scrollY={true}
              scrollWithAnimation={true}
              className="StBaseLayout-wrapper_scrollContainer"
              scrollTop={layoutScrollTop}
              onScroll={this.handleScroll}
            >
              {this.props.children}
            </ScrollView>
          )}
          {process.env.TARO_ENV === "h5" && (
            <ScrollView
              scrollY={true}
              scrollWithAnimation={true}
              className="app-scrollContainer"
              onScroll={this.handleScroll}
            >
              {this.props.children}
            </ScrollView>
          )}
        </View>
        {this.props.renderBottom}
      </View>
    );
  }
}

StBaseLayout.defaultProps = {
  title: "",
  isHideNav: false,
  scrollTopBoundary: 21,
  contentClass: "",
  className: "",
  navOptions: {},
  isHideTitleBeforeToggle: false,
  isFullScreen: false,
  barStyle: "black",
  isToggleBarStyle: false,
  renderTop: undefined,
  renderBottom: undefined,
  renderRightCon: undefined,
};
StBaseLayout.propTypes = {
  title: PropTypes.string,
  scrollTopBoundary: PropTypes.number,
  contentClass: PropTypes.string,
  className: PropTypes.string,
  navOptions: PropTypes.object,
  isHideTitleBeforeToggle: PropTypes.bool,
  isFullScreen: PropTypes.bool,
  isHideNav: PropTypes.bool,
  barStyle: PropTypes.string,
  isToggleBarStyle: PropTypes.bool,
  renderTop: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  renderBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  renderRightCon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
