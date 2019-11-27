import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
// eslint-disable-next-line import/first
import '@tarojs/async-await'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  config = {
    pages: [
      'pages/shop/index',
      'pages/index/index',
      'pages/cart/index',
      "pages/mine/order/list/index",
      'pages/news/index',
      'pages/news/detail/index',
      'pages/mine/index',
      'pages/detail/index',
      'pages/mine/order/detail/index',

    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#ffffff',
      navigationBarTitleText: 'ACQUIT',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#7b7b7a',
      selectedColor: '#c0a369',
      backgroundColor: '#222222',
      list: [
        {
          pagePath: 'pages/shop/index',
          text: '首页',
          iconPath: 'asset/home.png',
          selectedIconPath: 'asset/home_active.png'
        },
        {
          pagePath: 'pages/news/index',
          text: '资讯',
          iconPath: 'asset/shoppingbag.png',
          selectedIconPath: 'asset/shoppingbag_active.png'
        },

        {
          pagePath: 'pages/cart/index',
          text: '购物车',
          iconPath: 'asset/shoppingbag.png',
          selectedIconPath: 'asset/shoppingbag_active.png'
        },

        // {
        //   pagePath: 'pages/order/list/index',
        //   text: '订单',
        //   iconPath: 'asset/mine.png',
        //   selectedIconPath: 'asset/mine_active.png'
        // },
        {
          pagePath: "pages/mine/index",
          iconPath: "./asset/user.png",
          selectedIconPath: "./asset/user-active.png",
          text: "个人"
        }
        
      ]
    },
    cloud: true,
    networkTimeout: {
      request: 60000,
      connectSocket: 10000,
      uploadFile: 10000,
      downloadFile: 10000
    }
  }

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init({
        env: 'debug-h2ld5', // 获取环境ID：前往 云开发控制台-设置-环境ID debug-h2ld5
        traceUser: true // 是否要捕捉每个用户的访问记录。设置为true，用户可在管理端看到用户访问记录
      })
    }

    Taro.getSetting()
      .then(res=>{
        if(res.authSetting["scope.userInfo"]){

          return true;
        }else {
          throw new Error('没有授权')
        }
      })
      .then(res=>{
        return Taro.getUserInfo();
      })
      .then(res=>{
        Taro.setStorage({
          key: 'userInfo',
          data: res.userInfo
        })
      })
      .catch(err=>{
        console.log(err)
      })

  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
