/*
 * @Author: sam.li
 * @Date: 2021-10-13 12:35:12
 * @LastEditors: sam.li
 * @LastEditTime: 2021-10-15 14:57:28
 */
import { Component } from 'react'
import './app.scss'

Promise.prototype.complete=function(callback){
  let p=this.constructor;
  return this.then(
      value=>p.resolve(callback()).then(()=>value),
      reson=>p.resolve(callback()).then(()=>{throw reson})
  )
}

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
