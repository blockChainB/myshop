const wxServer = require('wx-server-sdk')
wxServer.init({
    env: 'debug-h2ld5', // 获取环境ID：前往 云开发控制台-设置-环境ID debug-h2ld5
    traceUser: true // 是否要捕捉每个用户的访问记录。设置为true，用户可在管理端看到用户访问记录
  })
const db = wxServer.database()
exports.main = async (event, context) => {
var dbName = event.dbName;
var filter = event.filter? event.filter:null;
var pageIndex = event.pageIndex?event.pageIndex:1;
var pageSize = event.pageSize? event.pageSize:10;
const totalResult = await db.collection(dbName).where(filter).count()
const total = totalResult.total;
const totalpage = Math.ceil(total/pageSize) // 计算多少页
const isGetNews = event.isGetNews;  // 是否是想要最新的数据的1,
var hasMore;
if(pageIndex > totalpage || pageIndex == totalpage) {
    hasMore = false;
}else{
    hasMore = true;
}
 return db.collection(dbName).where(filter).skip(isGetNews?(totalpage-pageIndex)*pageSize:(pageIndex -1) *pageSize).limit(pageSize).get().then(res=>{
     res.hasMore = hasMore;
     res.code = 0;
     return res;
 })

}