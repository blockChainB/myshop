import Taro from '@tarojs/taro'
import {
    View,
  Webview
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
        navigationBarTitleText: ''
}
    
 componentWillMount () {
    const params = (this.$router || this.context.$router).params
    const url = params.url
    const title = params.title;
     console.log("url",url);
    Taro.setNavigationBarTitle({
        title:title
    })
    this.setState({
        urlString:url
        })

    
}
    
handleMessage () {

}

render () {

       return (
        <View> 

    <Webview className='user-menu' src={this.state.urlString} onMessage={this.handleMessage}>

    </Webview>
    </View>
    )
 
    }


}