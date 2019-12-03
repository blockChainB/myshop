const wxServer = require('wx-server-sdk')

async function addUser (db,YHM) {
// const addUser = async (db,YHM) => {
    const { OPENID } = wxServer.getWXContext()
    const collection = db.collection('userYHQ')
    const hasUser = await collection.where({ open_id: OPENID }).get()
    if (hasUser &&Array.isArray(hasUser.data) && hasUser.data.length === 0) {
        await  collection.add({ data: { open_id: OPENID ,userYHQ:YHM} })
        return 200;
    }else{
        return -200 ;
    }
   
}
// findYHQuan
async function findYHQuan (db) {
    const { OPENID } = wxServer.getWXContext()
    const collection = db.collection('userYHQ')
    const hasUser = await collection.where({ open_id: OPENID }).get()

    if (hasUser &&Array.isArray(hasUser.data) && hasUser.data.length !== 0) {
        // await  collection.add({ data: { open_id: OPENID ,userYHQ:YHM} })
        return hasUser;
    }else{
        return -200 ;
    }
   
}
module.exports = {
    addUser,
    findYHQuan
   
}