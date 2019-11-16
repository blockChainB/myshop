const wxServer = require('wx-server-sdk')
const TcbRouter = require('tcb-router')

const { addUser: addUserService } = require('./user')

wxServer.init({
    env: 'holo-env-30guo', // 获取环境ID：前往 云开发控制台-设置-环境ID holo-env-30guo
    traceUser: true // 是否要捕捉每个用户的访问记录。设置为true，用户可在管理端看到用户访问记录
  })

exports.main = async (event, context) => {
    const app = new TcbRouter({ event })
    const db = wxServer.database()

    app.router('getOpenId', async (ctx, next) => {
        const data = await addUserService(db)
        ctx.body = {
            code: 0,
            data
        }
    })
    return app.serve()
}
