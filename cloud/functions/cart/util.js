const app = require('wx-server-sdk')

app.init({
    env: 'holo-env-30guo', // 获取环境ID：前往 云开发控制台-设置-环境ID holo-env-30guo
    traceUser: true // 是否要捕捉每个用户的访问记录。设置为true，用户可在管理端看到用户访问记录

})


const typeMap = {
    ADD: '2',
    CHANGE_NUM: '3',
    DEL: '4',
    CHECK: '5',
    INVERT_CHECK: '6',
    CHANGE_ATTR: '8'
}

async function getNewCartData({ cartInfo, shopMap }) {
    const db = app.database()
    const comColl = db.collection('Commodity')
    const shopColl = db.collection('Shop')
    console.log("cartInfo",cartInfo);
    const newShopMap = {}
    const allCartInfoData = await Promise.all(
        cartInfo.map(async item => {
            let newItem = item
            // 如果没有商品的具体信息
            if (!item.info) {
                // 获得商品的具体信息 [0]
                let allItemData = await comColl.doc(item.skuId).get()
                allItemData = allItemData.data
                // 加上venderId item
                console.log('......')
              console.log("allItemData", allItemData)
              console.log("item", item)
                if (!item.venderId) {
                    // item.skuId  allItemData.venderId
                    item.venderId = allItemData.venderId
                }
                item.venderId += ''

                // 更改尺寸
                if (item.size) {
                    allItemData.sizeInfo.value = item.size
                }

                // 更改颜色
                if (item.color) {
                    allItemData.colorInfo.value = item.color
                }

                // 判定是否被选中
                if (!item.isCheck) {
                    item.isCheck = false
                }

                newItem = Object.assign({}, item, { info: allItemData })
            }

            // 获得商店的具体信息
            if (!newShopMap[newItem.venderId]) {
                // 先找下有没有缓存，不用再查数据库
                if (!shopMap[newItem.venderId]) {
                    let shopInfo = await shopColl
                        .doc(newItem.venderId)
                        .field({
                            thumbnail: true,
                            title: true,
                            venderId: true
                        })
                        .get()
                    shopInfo = Array.isArray(shopInfo)
                        ? shopInfo.data[0]
                        : shopInfo.data
                    newShopMap[newItem.venderId] = shopInfo
                } else {
                    newShopMap[newItem.venderId] = shopMap[newItem.venderId]
                }
            }

            return newItem
        })
    )

    const cartData = {
        cartNum: 0,
        totalPrice: 0,
        cartInfo: allCartInfoData,
        shopMap: [newShopMap]
    }

    allCartInfoData.forEach(item => {
        cartData.cartNum += item.num
        if (item.isCheck) {
            cartData.totalPrice += item.num * parseInt(item.info.price)
        }
    })

    return cartData
}

module.exports = {
    typeMap,
    getNewCartData
}
