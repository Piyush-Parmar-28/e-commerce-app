const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    Product: {
        type: String,
    },
    Category: {
        type: String
    },
    Price: {
        type: Number
    },
    Ratings: {
        type: Number
    },
    Offers: {
        type: Number
    },
    ImageID: {
        type: String
    },
    Desc: {
        type: String
    }

})

productSchema.statics.getAllproducts = async ()=>{
    const products = await ProductObj.find()
    return products
}

//  Creating collection named 'Product' (Mongoose will automatically append 's' to the collection name & hence make it 'Products')
//  Creating object of 'Product' collection named 'ProductObj'
const ProductObj = mongoose.model('Product', productSchema)

module.exports = ProductObj