/*
 * @Author: sam.li
 * @Date: 2021-10-18 15:58:48
 * @LastEditors: sam.li
 * @LastEditTime: 2021-10-18 16:32:02
 */
import {
    View
} from '@tarojs/components'
import {
    useState,
    useEffect
} from 'react'
function ttt () {
    const [a, setA] = useState(1)
    useEffect(()=>{
        console.log('ttt')
    },[])
    return (
        <View>sasd{a}</View>
    )
}

export default ttt