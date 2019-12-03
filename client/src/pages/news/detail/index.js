import Taro from '@tarojs/taro'
import {
    View,
    WebView
} from '@tarojs/components'
import AtBase from '../../../bases/base'

import './index.scss'



export default class detail extends AtBase {

constructor () {
        super(...arguments)
        this.state = {
          urlString: "",
          params: {},
          showMore: false,
          banner: [],
          floors: []
        }
      }
    
      config = {
        navigationBarTitleText: '',

}
    
 componentWillMount () {
    const params = (this.$router || this.context.$router).params
    const url = params.url
    const title = params.title;
     console.log("url",url ,title );

    Taro.setNavigationBarTitle({
        title:'ACQUIT-资讯'
    })
    // Taro.setStorageSync('newsURL',url)
    const newsURL = Taro.getStorageSync('newsURL');
    if(newsURL){
      this.setState({
        urlString: newsURL
      })
    }
    

    
}
    
handleMessage () {

}

render () {

       return (
        <View> 

            <WebView className='user-menu' src={this.state.urlString} onMessage={this.handleMessage}> </WebView>

       </View>
    )
 
    }


}