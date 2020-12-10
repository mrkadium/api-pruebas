const mongoose = require('mongoose')
const {Schema} = mongoose

const ComidaSchema = new Schema({
    menu: {type: String, require: true},
    precio: {type: Number, require: true}
})

module.exports = mongoose.model('comida', ComidaSchema)