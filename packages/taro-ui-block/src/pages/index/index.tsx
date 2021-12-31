import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text, Swiper, SwiperItem } from "@tarojs/components";

import BaseLayout from "@/components/base-layout";
import "./index.scss";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  clickTest() {
    console.log("click");
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "首页",
  };

  render() {
    const { number } = this.state;
    const bbb = <View>{number}</View>;
    const bottom = <View>bottom</View>;
    return (
      <View className="index">
        <BaseLayout
          title="我的标题"
          renderTop={bbb}
          renderBottom={bottom}
          className="abc"
          contentClass="content-class"
          navOptions={{
            entiesRoute: ['/pages/index/index'],
            firstPageBack: ()=>{
              console.log('back');
            }
          }}
        >
          <Swiper
            className="test-h"
            indicatorColor="#999"
            indicatorActiveColor="#333"
            circular={false}
            indicatorDots
            autoplay
          >
            <SwiperItem>
              <View className="demo-text-1">1</View>
            </SwiperItem>
            <SwiperItem>
              <View className="demo-text-2">2</View>
            </SwiperItem>
            <SwiperItem>
              <View className="demo-text-3">3</View>
            </SwiperItem>
          </Swiper>
          <Swiper
            className="test-h"
            indicatorColor="#999"
            indicatorActiveColor="#333"
            circular={false}
            indicatorDots
            autoplay
          >
            <SwiperItem>
              <View
                className="demo-text-1"
                onClick={this.clickTest}
                style={{
                  backgroundColor: "red",
                }}
              >
                1
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className="demo-text-2">2</View>
            </SwiperItem>
            <SwiperItem>
              <View className="demo-text-3">3</View>
            </SwiperItem>
          </Swiper>
          <View
            onClick={() => {
              this.setState({ number: number + 1 });
            }}
          >
            acn
          </View>
          <View
            onClick={() => {
              this.setState({ number: number + 1 });
            }}
          >
            acn
          </View>
          <View
            onClick={() => {
              this.setState({ number: number + 1 });
            }}
          >
            acn
          </View>
          <View
            onClick={() => {
              this.setState({ number: number + 1 });
            }}
          >
            acn
          </View>
          <View
            onClick={() => {
              this.setState({ number: number + 1 });
            }}
          >
            acn
          </View>
          <View
            onClick={() => {
              this.setState({ number: number + 1 });
            }}
          >
            acn
          </View>
          value<View
            onClick={() => {
              this.setState({ number: number + 1 });
            }}
          >
            acn
          </View>
          v
          valueIsInvalid<View
            onClick={() => {
              this.setState({ number: number + 1 });
            }}
          >
            acn
          </View>v
          <View
            onClick={() => {
              this.setState({ number: number + 1 });
            }}
          >
            acn
          </View>
          <View
            onClick={() => {
              this.setState({ number: number + 1 });
            }}
          >
            acn
          </View>
          <View
            onClick={() => {
              this.setState({ number: number + 1 });
            }}
          >
            acn
          </View>
          <View
            onClick={() => {
              this.setState({ number: number + 1 });
            }}
          >
            acn
          </View>
          <View
            onClick={() => {
              this.setState({ number: number + 1 });
            }}
          >
            acn
          </View>
          <View
            onClick={() => {
              this.setState({ number: number + 1 });
            }}
          >
            acn
          </View>
          <View
            onClick={() => {
              this.setState({ number: number + 1 });
            }}
          >
            acn
          </View>
          <View
            onClick={() => {
              this.setState({ number: number + 1 });
            }}
          >
            acn
          </View>
          <View
            onClick={() => {
              this.setState({ number: number + 1 });
            }}
          >
            acn
          </View>
        </BaseLayout>
      </View>
    );
  }
}
