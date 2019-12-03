import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
// import jump from '@utils/jump'
import classNames from 'classnames'
import './index.scss'
import AtBase from '../../../bases/base'

const MENU_LIST = [{
  key: 'order',
  text: '我的订单',
  img: require('./assets/order.png')
}, {
  key: 'pin',
  text: '我的拼团',
  img: require('./assets/pin.png')
}, {
  key: 'bargain',
  text: '我的砍价',
  img: require('./assets/bargain.png')
}, {
  key: 'credit',
  text: '我的积分',
  img: require('./assets/credit.png')
}, {
  key: 'service',
  text: '退换/售后',
  img: require('./assets/service.png')
}, {
  key: 'coupon',
  text: '优惠券',
  img: require('./assets/coupon.png')
}, 
// {
//   key: 'red-packet',
//   text: '红包',
//   img: require('./assets/red-packet.png')
// }, {
//   key: 'allowance',
//   text: '津贴',
//   img: require('./assets/allowance.png')
// }, 
// {
//   key: 'gif-card',
//   text: '礼品卡',
//   img: require('./assets/gif-card.png')
// }, {
//   key: 'location',
//   text: '地址管理',
//   img: require('./assets/location.png')
// }, {
//   key: 'safe',
//   text: '账号安全',
//   img: require('./assets/safe.png')
// }, {
//   key: 'contact',
//   text: '联系客服',
//   img: require('./assets/contact.png')
// }, {
//   key: 'feedback',
//   text: '用户反馈',
//   img: require('./assets/feedback.png')
// }, {
//   key: 'help',
//   text: '帮助中心',
//   url: 'http://m.you.163.com/help',
//   img: require('./assets/help.png')
// }
]
const COUNT_LINE = 3

export default class Menu extends AtBase {
  handleClick = (menu) => {
    // NOTE 时间关系，此处只实现帮助中心，用于演示多端 webview
    if (menu.key === 'order') {
      // jump({ url: menu.url, title: menu.text })
      Taro.navigateTo({
        url:'order/list/index'
      })
    } else if(menu.key === 'coupon'){
      this.getYHQuan()
      
    } else{
      //coupon 
      Taro.showToast({
        title: '目前只实现了我的订单~优惠券等',
        icon: 'none'
      })
    }
  }

  async  getYHQuan (){
    console.log(".getYHQuan.",this.state.getYHMoney);
    //添加进去,然后查询是否成功了 
const res = await Taro.cloud.callFunction({
  name: 'userYHQ',
  data: {
    $url: 'findYHQuan',
   
  }
})
// 成功调用
console.log(res,"userYHQ");
if (this.successCode(res) && res.result.data !==-200) {
  console.log(res,"findYHQuan")
  const title = res.result.data.data[0].userYHQ.YHM;

  Taro.showToast({
    title:"你有一张"+title +'元优惠券',
    icon: 'none',
    duration: 2000
  })
}else if(this.successCode(res) && res.result.data ===-200){
  Taro.showToast({
    title:'还没有领取过呢',
    icon: 'none',
    duration: 2000
  })
}
  
}


  render () {
    return (
      <View className='user-menu'>
        {MENU_LIST.map((menu, index) => {
          // NOTE 不用伪元素选择器，需自行计算
          const nth = (index + 1) % COUNT_LINE === 0
          const lastLine = parseInt(index / COUNT_LINE) === parseInt(MENU_LIST.length / COUNT_LINE)
          return (
           
            <View
              key={menu.key}
              className={classNames(
                'user-menu__item',
                nth && 'user-menu__item--nth',
                lastLine && 'user-menu__item--last',
              )}
              onClick={this.handleClick.bind(this, menu)}
            >
              <Image className='user-menu__item-img' src={menu.img} />
              <Text className='user-menu__item-txt'>{menu.text}</Text>
            </View>
          )
        })}
         <button open-type="contact" bindcontact="handleContact">联系客服</button>
      </View>
    )
  }
}
