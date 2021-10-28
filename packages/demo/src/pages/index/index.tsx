/*
 * @Author: sam.li
 * @Date: 2021-10-13 12:35:12
 * @LastEditors: sam.li
 * @LastEditTime: 2021-10-18 16:31:18
 */
import { Component, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

import http from '../../common/http'
// import TopBar from 'taro-block/components/TopBar/index'
import Block from 'taro-block/components/block/index'
import Ttt from '../ttt'

export default function Index() {
  useEffect(()=>{
    console.log('did')
  },[])
  return (
    <View className='index'>
      <Block
        title="123"
      >as</Block>
      <Ttt></Ttt>
      {/* <TopBar></TopBar> */}
      <Text>Hello world!</Text>
    </View>
  )
}


// export default class Index extends Component {

//   componentWillMount () { }

//   componentDidMount () { 

//     http.get('/proxy/ms-wechat/3party/portal/miniProgramAuth').complete(res=>{
//       console.log('done')
//       console.log(res)
//     })
//   }

//   componentWillUnmount () { }

//   componentDidShow () { }

//   componentDidHide () { }

//   render () {
//     return (
//       <View className='index'>
//         <Block
//           title="123"
//         >as</Block>
//         {/* <Ttt></Ttt> */}
//         {/* <TopBar></TopBar> */}
//         <Text>Hello world!</Text>
//       </View>
//     )
//   }
// }
