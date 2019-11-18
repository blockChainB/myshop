import Taro from '@tarojs/taro'
import {
  View,
  Text,
  Image,
  ScrollView,
  Swiper,
  SwiperItem
} from '@tarojs/components'
import AtBase from '../../bases/base'

import './index.scss'
import SearchInto from '../../components/search-into'
import { getSystemInfo } from '../../utils'

export const SEARCH_BAR_MORE_IMAGE =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAGCAYAAADUtS5UAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAlklEQVQoz8WRsQ6CMBRFD5X4S4Z/kTK5QjARWJyJ8gtO8jGELyJhAAeeSdOUIpNnvD19vekLouh0BBpAAxPQAkXX9SMODP8MBOLfNvwnEJt+KGFquJkUuOLmYfmp+PmKX8tM0x+UNLHRrKN3+okjuyj+hGL5c5vWc+f9Y+Y7e4VAwbJ0DczyaOkZVErh74q2/Ao4WP79A14CJJ7qixoSAAAAAElFTkSuQmCC'

export default class Shop extends AtBase {
  constructor () {
    super(...arguments)
    this.state = {
      isFirst: true,
      params: {},
      showMore: false,
      banner: [],
      floors: []
    }
  }

  config = {
    navigationBarTitleText: ''
  }

  async componentWillMount () {
    const params = (this.$router || this.context.$router).params
    let venderId = params.venderId || '1'
    const scene = decodeURIComponent(params.scene)
    if (scene) {
      const sceneParams = this.queryStringToJson(scene)
      if (sceneParams.venderId) {
        venderId = sceneParams.venderId
      }
    }
    await this.getShopData(venderId)
   
  }


  async getShopData (venderId) {
    const res = await Taro.cloud.callFunction({
      name: 'news',
      data: {
        $url: 'getNews',
       
      }
    })
    // 成功调用
    if (this.successCode(res)) {
      const afterData = this.getDataContent(res)
      console.log("getNews",afterData);
      const arryData = afterData.data;
      this.setState({
        params: {
          venderId
        },
        data:arryData,
        showMore: false,
        isFirst: false,
        ...afterData
      })
      Taro.setNavigationBarTitle({
        // title: afterData.title
        title: "ACQUIT-资讯"
      })
      console.log('.....data',this.state.data);
      // Taro.redirectTo(`/pages/detail/index?skuId=1`)

    } else {
      // TODO: 异常处理
      console.log('.....')
    }
  }

 componentDidShow () {

    // this.onGotoDetail(1)
    // console.log('jumpUrl2')
  }

  // 搜索框显示更多
  toggleShowMore () {
    //由于 this.setState 异步的缘故，可以通过给 this.setState 传入函数来确保拿到正确的值
    this.setState(prevState => ({ showMore: !prevState.showMore }))
  }

  // more里的联系客服
  connectService () {
    Taro.makePhoneCall({
      phoneNumber: '000000000000' //仅为示例，并非真实的电话号码
    })
  }

  onGotoPage (page) {
    this.jumpUrl(`/pages/${page}/index`)
    console.log(page,"page")
  }

  onGotoDetail (skuId) {
    this.jumpUrl(`/pages/detail/index?skuId=${skuId}`)
  }

  render () {

    
    const { isFirst, data, floors, showMore } = this.state

    // console.log("banner", banner);
    

    const isIphonex = getSystemInfo().isIpx
    return (
      !isFirst && (
        <View
          className='shop_nocate'
          style={isIphonex ? 'padding-bottom: 164rpx;' : ''}
        >
          {/* <View className='topbar' >
            <SearchInto cls='small' placeholder='搜索店铺内商品' type='shop' />
            <View className='topbar_search_action'>
              <View
                className='topbar_search_more'
                onClick={this.toggleShowMore.bind(this)}
              >
                <Image
                  className='topbar_search_icon topbar_search_icon_more'
                  src={SEARCH_BAR_MORE_IMAGE}
                />
                {showMore && (
                  <View className='topbar_search_more_container'>
                    <View className='topbar_search_more_container-inner'>
                      <View
                        className='topbar_search_more_connect'
                        onClick={this.connectService.bind(this)}
                      >
                        联系客服
                      </View>
                      <View
                        className='topbar_search_more_tohome'
                        onClick={this.onGotoPage.bind(this, 'shop')}
                      >
                        回到首页
                      </View>
                      <View
                        className='topbar_search_more_tocart'
                        onClick={this.onGotoPage.bind(this, 'cart')}
                      >
                        购物车
                      </View>
                    </View>
                  </View>
                )}
              </View> */}
              {/* {showMore && (
                <View
                  className='mask'
                  onClick={this.toggleShowMore.bind(this)}
                />
              )}
            </View>
          </View>
           */}
          <ScrollView className='goods' scrollY>

                   {data.map((item, floorIndex) => {
                      // console.log(floorIndex,item);
                      return (
                        <View
                          key={floorIndex}
                          className='goods_item'
                          onClick={this.onGotoDetail.bind(this, item.url)}
                        >
                          <View className='goods_img'>
                            <Image
                              className='goods_img_image'
                              src={item.img}
                              mode='aspectFill'
                              lazyLoad
                            />
                          </View>
                          <View className='goods_info'>
                            <Text
                              className='goods_name'
                              onClick={this.onGotoDetail.bind(this, item.url)}
                            >
                              {"标题: " + item.title}
                            </Text>
                            <Text
                              className='goods_price goods_price_new'

                            >
                              {"简介: " + item.des}
                            </Text>
                          </View>
                        </View>
                      )
                    })}
            </ScrollView>

        </View>
      )
    )
  }
}
