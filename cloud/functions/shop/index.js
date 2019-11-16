const wxServer = require('wx-server-sdk')
const TcbRouter = require('tcb-router')

const informationService = require('./information')
const getShopService = require('./shop')
const getSkuService = require('./sku')

wxServer.init({
    env: 'holo-env-30guo', // 获取环境ID：前往 云开发控制台-设置-环境ID holo-env-30guo
    traceUser: true // 是否要捕捉每个用户的访问记录。设置为true，用户可在管理端看到用户访问记录
  })

exports.main = async (event, context) => {
    const app = new TcbRouter({ event })
    const db = wxServer.database()

    app.router('getInformation', async (ctx, next) => {
        const data = await informationService(db)
        ctx.body = {
            code: 0,
            data
        }
    })
    app.router('getShop', async (ctx, next) => {
        const { data: venderId } = event
        const data = await getShopService(db, venderId)
        ctx.body = {
            code: 0,
            data
        }
    })
    app.router('getSku', async (ctx, next) => {
        const { data: skuId} = event
        const data = await getSkuService(db, skuId)
        ctx.body = {
            code: 0,
            data
        }
    })
    return app.serve()
}
