const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    id:{
        type: String
    },
    image: {
        type: Buffer
    }

})

imageSchema.statics.getImage = async (id)=>{
    const products = await Image.findOne({id})
    return products
}



const Image = mongoose.model('Image', imageSchema)

module.exports = Image