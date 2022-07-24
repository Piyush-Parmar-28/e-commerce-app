const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    Email: {
        type: String,
    },
    Password: {
        type: String
    },
    Fname: {
        type: String
    },
    Lname: {
        type: String
    },
    Phone: {
        type: String
    },
    City: {
        type: String
    },
    Country: {
        type: String
    },
    Address: {
        type: String
    },
    ImageURL: {
        type: String
    },
    ImageData:{
        type: Buffer
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]

})

//  Creating a collection named 'User' (Mongoose will automatically append 's' to the collection name & hence make it 'Users')
//  Creating object of 'User' collection named 'UserObj'  
const UserObj = mongoose.model('User', userSchema)

module.exports = UserObj