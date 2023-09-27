const {Schema, model} = require("mongoose")

const schema = new Schema({
    title: {
        type: String
    },
    img: {
        type: String
    },
    price: {
        type: Number
    }
}) 

module.exports = model('Item', schema)