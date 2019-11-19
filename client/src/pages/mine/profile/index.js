import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
// import defaultAvatar from '@assets/default-avatar.png'
import Vip from './vip'
import './index.scss'

export default class Profile extends Component {
  static defaultProps = {
    userInfo: {}
  }

  handleLogin = () => {
    console.log('handleLogin')
    if (!this.props.userInfo.nickName) {
      // Taro.navigateTo({
      //   url: '/pages/user-login/user-login'
      // })
      Taro.login({
        success: (res)=> {
          if (res.code) {
            //发起网络请求
            // Taro.request({
            //   url: 'https://test.com/onLogin',
            //   data: {
            //     code: res.code
            //   }
            // })
            console.log(res.code,"code")
            Taro.getUserInfo({
              success: (resp)=> {
                var userInfo = resp.userInfo
                // var nickName = userInfo.nickName
                // var avatarUrl = userInfo.avatarUrl
                // var gender = userInfo.gender //性别 0：未知、1：男、2：女
                // var province = userInfo.province
                // var city = userInfo.city
                // var country = userInfo.country
                this.defaultProps = {
                  userInfo:userInfo
                }
              }
            })
          
      

          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      });

    } 
  }

  getUid = (uid) => {
    if (!uid || !/@/.test(uid)) {
      return ''
    }
    const [username, suffix] = uid.split('@')
    const firstLetter = username[0]
    const lastLetter = username[username.length - 1]
    return `${firstLetter}****${lastLetter}@${suffix}`
  }


  render () {
    const { userInfo } = this.props
    const bgImag = require("./assets/bg.png")
    const leve = require('./assets/level-01.png')
    const qrcode = require( './assets/qr-code.png')
    const icon = require( './assets/default-avatar.png')
    console.log("...",userInfo);
    return (
      <View className='user-profile'>
        {/* // NOTE 背景图片：Image 标签 + position absolute 实现 */}
        <Image
          className='user-profile__bg'
          src={bgImag}
          mode='widthFix'
        />

        <View className='user-profile__wrap'>
          <View className='user-profile__avatar'>
            <Image
              className='user-profile__avatar-img'
              src={userInfo.nickName ?userInfo.avatarUrl:icon}
              onClick={this.handleLogin}
            />
          </View>

          <View className='user-profile__info' onClick={this.handleLogin}>
            <Text className='user-profile__info-name'>
              {userInfo.nickName ? userInfo.nickName : '未登录'}
            </Text>
            {userInfo.nickName ?
              <View className='user-profile__info-wrap'>
                {/* XXX 没有全部 level 对应的图标，暂时都用 v1 */}
                <Image className='user-profile__info-level' src={leve} />
                <Text className='user-profile__info-uid'>
                  {this.getUid(userInfo.uid)}
                </Text>
              </View> :
              <Text className='user-profile__info-tip'>点击登录账号</Text>
            }
          </View>

          <View className='user-profile__extra'>
            {/* <View className='user-profile__extra-qr'>
              <Image
                className='user-profile__extra-qr-img'
                src={qrcode}
              /> */}
            {/* </View> */}
          </View>

          <Vip />
        </View>
      </View>
    )
  }
}
