const mongoose = require('mongoose')
const {Schema} = mongoose

const LibroSchema = new Schema({
    titulo: {type: String, require: true},
    editorial: {type: String, requiere: true},
    autores: {type: Array, require: true},
    anio: {type: Number, requiere: true}
})

module.exports = mongoose.model('libro', LibroSchema)