const wxServer = require('wx-server-sdk')
const TcbRouter = require('tcb-router')

const { getCart: getCartService } = require('./cart')
const { editCart: editCartService } = require('./cart')

wxServer.init({
    env: 'holo-env-30guo', // 获取环境ID：前往 云开发控制台-设置-环境ID holo-env-30guo
  traceUser: true // 是否要捕捉每个用户的访问记录。设置为true，用户可在管理端看到用户访问记录
})

exports.main = async (event, context) => {
    const app = new TcbRouter({ event })
    const db = wxServer.database()

    app.router('getCart', async (ctx, next) => {
        const { data: cartData } = event
        const data = await getCartService(db, cartData)
        ctx.body = {
            code: 0,
            data
        }
    })
    app.router('editCart', async (ctx, next) => {
        const { data: editData } = event
        const data = await editCartService(db, editData)
        ctx.body = {
            code: 0,
            data
        }
    })
    return app.serve()
}
