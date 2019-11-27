const app = require('wx-server-sdk')

const { getBalance } = require('./getBalance.js')
const { addOrder } = require('./addOrder.js')
const { getOrder } = require('./getOrder.js')
const { cancelOrder } = require('./cancelOrder.js')
const { getOrderDetail } = require('./getOrderDetail.js')

app.init({
  env: 'debug-h2ld5', // 获取环境ID：前往 云开发控制台-设置-环境ID debug-h2ld5
  traceUser: true // 是否要捕捉每个用户的访问记录。设置为true，用户可在管理端看到用户访问记录
})

async function main (event, context) {
  const db = app.database()
  const { func, data } = event
  let res
  if (func === 'getBalance') {
    res = await getBalance(app, data)
  } else if (func === 'addOrder') {
    res = await addOrder(db, data)
  } else if (func === 'getOrder') {
    res = await getOrder(db, data)
  } else if (func === 'getOrderDetail') {
    res = await getOrderDetail(db, data)
  } else if (func === 'cancelOrder') {
    res = await cancelOrder(db, data)
  }

  return {
    data: res
  }
}

exports.main = main