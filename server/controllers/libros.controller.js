const Libro = require('../models/libro')
const libroController = {}

function makeResponse(libro, status, message){
    const resp = {
        status: status,
        message: message,
        data: libro
    }
    return resp
}

libroController.getLibros = async (req, res) =>{ 
    const listaLibros = await Libro.find()
    res.json(makeResponse(listaLibros, 200, 'Succesfully retrieved'))
}
libroController.getLibro = async (req, res) =>{
    try{
        const libro = await Libro.findById(req.params.id)
        res.json(makeResponse([libro], 200, 'Succesfully retrieved'))
    }catch(ex){
        res.json(makeResponse([], 400, 'There item was not found'))
    }
}
libroController.createLibro = async (req, res) =>{
    const libro = new Libro(req.body)
    try{
        await libro.save()
        res.json(makeResponse([libro], 200, 'Succesfully retrieved'))
    }catch(ex){
        res.json(makeResponse([], 400, 'There item was not found'))
    }
}
libroController.updateLibro = async (req, res) =>{
    const {id} = req.params
    const body = {
        titulo: req.body.titulo,
        autores: req.body.autores,
        editorial: req.body.editorial,
        anio: req.body.anio
    }

    try{
        const libro = await Libro.findByIdAndUpdate(id, {$set: body}, {new: true, 'useFindAndModify': false})
        res.json(makeResponse([libro], 200, 'Succesfully retrieved'))
    }catch(ex){
        res.json(makeResponse([], 400, 'There item was not found'))
    }
}
libroController.deleteLibro = async (req, res) =>{
    try{
        const libro = await Libro.findByIdAndDelete(req.params.id,  {'useFindAndModify': false})
        res.json(makeResponse([libro], 200, 'Succesfully retrieved'))
    }catch(ex){
        res.json(makeResponse([], 400, 'There item was not found'))
    }
}

module.exports = libroController