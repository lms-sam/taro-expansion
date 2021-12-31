import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import classnames from "classnames";
import PropTypes, { InferProps } from "prop-types";
import { StNavBarProps, StNavBarState } from "types/nav-bar";
import { redirectTo, back } from "@/common/router";
import StComponent from "../../common/component";
import {getMenuButton} from '../../utils/getMenuButton'
import getCurrentRoute from "../../common/getCurrentRoute";
import "./index.scss";

export default class StNavBar extends StComponent<
  StNavBarProps,
  StNavBarState
> {
  public static defaultProps: StNavBarProps;
  public static propTypes: InferProps<StNavBarProps>;

  constructor(props: StNavBarProps) {
    super(props);
    this.state = {
      menuButtonInfo: {},
      isShowBack: true,
    };
  }
  private _curPages = Taro.getCurrentPages();
  private _curPage = getCurrentRoute();
  public componentDidMount(): void {
    const { entiesRoute = [] } = this.props;
    this.setState({
      menuButtonInfo: getMenuButton()
    })
    if (process.env.TARO_ENV === "h5") {
      this.props.initFn && this.props.initFn();
    }
    if (process.env.TARO_ENV === "weapp") {
      // 是入口 且 路由栈只有1
      if (
        this._curPages.length === 1 &&
        entiesRoute.length > 0 &&
        entiesRoute.includes(this._curPage)
      ) {
        this.setState({
          isShowBack: false,
        });
      }
    }
  }
  private handleBack = () => {
    const { redirectUrl } = this.props;
    if (redirectUrl) {
      redirectTo({
        url: redirectUrl,
      });
      return;
    }
    if (this._curPages.length === 1) {
      if (process.env.TARO_ENV === "h5") {
        this.props.firstPageBack && this.props.firstPageBack();
      }
    } else {
      back();
    }
  };

  render(): JSX.Element {
    const {
      isShowCon,
      title,
      className,
      isFix,
      isTransparency,
      isShowRight,
    } = this.props;
    const { menuButtonInfo, isShowBack } = this.state;
    const wrapClass = classnames("StNavBar-wrapper", className, {
      fixed: isFix,
      transparency: isTransparency,
    });
    const wrapperStyle = {
      paddingTop: menuButtonInfo.top + "px",
      height: menuButtonInfo.height + "px",
      // position: isFix? 'absolute' : 'relative',
    };
    const titleConStyle = {
      lineHeight: menuButtonInfo.height + "px",
      paddingTop: menuButtonInfo.top + "px",
      width: menuButtonInfo.left + "px",
    };
    return (
      <View className={wrapClass} style={wrapperStyle}>
        {!isShowCon && (
          <View
            className="StNavBar-wrapper_title-con"
            style={{
              lineHeight: menuButtonInfo.height + "px",
            }}
          >
            {title}
          </View>
        )}
        <View className="StNavBar-wrapper_content-con" style={titleConStyle}>
          {isShowBack && (
            <View
              className="StNavBar-wrapper_back-btn"
              onClick={this.handleBack}
            >
              <Text className="st-iconfont icon-fanhui1"></Text>
            </View>
          )}
          {isShowCon && (
            <View className="StNavBar-wrapper_content">
              {this.props.children}
            </View>
          )}
        </View>
        {process.env.TARO_ENV === "h5" && isShowRight && (
          <View className="StNavBar-wrapper_right-btn">
            {this.props.renderRightCon}
          </View>
        )}
      </View>
    );
  }
}

StNavBar.defaultProps = {
  isShowCon: false,
  title: "",
  className: "",
  isFix: false,
  isTransparency: false,
  isShowRight: false,
  entiesRoute: ["pages/index/index"],
  firstPageBack: (): void => {},
  initFn: (): void => {},
  renderRightCon: undefined,
};
StNavBar.propTypes = {
  isShowCon: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  isFix: PropTypes.bool,
  isTransparency: PropTypes.bool,
  isShowRight: PropTypes.bool,
  entiesRoute: PropTypes.array,
  firstPageBack: (): void => {},
  initFn: (): void => {},
  renderRightCon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
