// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'debug-h2ld5', // 获取环境ID：前往 云开发控制台-设置-环境ID debug-h2ld5
  traceUser: true // 是否要捕捉每个用户的访问记录。设置为true，用户可在管理端看到用户访问记录
})

// Taro.cloud.init({
//   env: 'debug-h2ld5', // 获取环境ID：前往 云开发控制台-设置-环境ID debug-h2ld5
//   traceUser: true // 是否要捕捉每个用户的访问记录。设置为true，用户可在管理端看到用户访问记录
// })


// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }

  return {
    sum: event.a + event.b
  }

  
}