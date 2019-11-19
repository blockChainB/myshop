import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import * as actions from '@actions/user'
// import { dispatchCartNum } from '@actions/cart'
// import { getWindowHeight } from '@utils/style'
import Profile from './profile'
import Menu from './menu'
import Activity from './activity'
import './index.scss'
import AtBase from '../../bases/base'
// @connect(state => state.user, { ...actions, dispatchCartNum })

export default class mine extends AtBase {
  config = {
    navigationBarTitleText: '个人中心'
  }

  constructor () {
    super(...arguments)
    this.state = {
      userInfo: {}
    }
  }

  

  componentDidShow (){
    try {
      const value = Taro.getStorageSync('userInfo')
      if (value) {
        console.log("value",value);

        this.setState({
          userInfo:value
        })
        //  this.render();
      }
    } catch (e) {
      // Do something when catch error
    }    
}

  handleLogin = () => {
    console.log('handleLogin')
    if (!this.state.userInfo.nickName) {


    } 


  }

  render () {
    const { userInfo } = this.state
    console.log("userInfo",userInfo);
    return (
      <View className='user'>
        <ScrollView
          scrollY
          className='user__wrap'
          // style={{ height: "700px"}}
        >
          <Profile userInfo={userInfo} />
          <Menu />
          {userInfo.nickName &&
            <View className='user__logout' onClick={this.handleLogin}>
              {/* <Text className='user__logout-txt'>切换账号</Text> */}
            </View>
          }
          <View className='user__empty' />
        </ScrollView>
        <View className='user__activity'>
          <Activity />
        </View>
      </View>
    )
  }
}

