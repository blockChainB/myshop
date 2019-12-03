const wxServer = require('wx-server-sdk')
const TcbRouter = require('tcb-router')

const { addUser: addUser ,findYHQuan: findYHQuan} = require('./userYHQ')

wxServer.init({
    env: 'debug-h2ld5', // 获取环境ID：前往 云开发控制台-设置-环境ID debug-h2ld5
    traceUser: true // 是否要捕捉每个用户的访问记录。设置为true，用户可在管理端看到用户访问记录
  })

exports.main = async (event, context) => {
    const app = new TcbRouter({ event })
    const { data: YHM} = event
    const db = wxServer.database()

    app.router('addYHQuan', async (ctx, next) => {
        const data = await addUser(db,YHM)
        ctx.body = {
            code: 0,
            data
        }
    })

    app.router('findYHQuan', async (ctx, next) => {
        const data = await findYHQuan(db)
        ctx.body = {
            code: 0,
            data
        }
    })


    return app.serve()
}
