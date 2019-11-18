// async (db, venderId) => {
module.exports =  async (db) => {

    const newsColl = db.collection('News')
    const res =   await newsColl.get()

    return  res
}

