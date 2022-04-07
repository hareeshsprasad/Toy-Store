var db = require('../config/connection')
var collection = require('../config/collection')
const async = require('hbs/lib/async')
module.exports = {
    addProduct:(product)=>{
        return new Promise (async(resolve,reject)=>{
            product.price = await parseInt(product.price)
            db.get().collection(collection.PRODUCT_COLLECTION).insertOne(product).then((data)=>{
                // console.log(data)
                resolve(data.insertedId)
            })
        })
    }
}