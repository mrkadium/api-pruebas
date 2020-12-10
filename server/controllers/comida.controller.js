const Comida = require('../models/comida')
const comidaController = {}

comidaController.getComidas = async (req, res) =>{ 
    const listaComidas = await Comida.find()
    res.json(listaComidas)
}
comidaController.getComida = async (req, res) =>{
    const comida = await Comida.findById(req.params.id)
    res.json(comida)
}
comidaController.createComida = async (req, res) =>{
    const comida = new Comida(req.body)
    await comida.save()
    res.json(comida)
}
comidaController.updateComida = async (req, res) =>{
    const {id} = req.params
    const body = {
        menu: req.body.menu,
        precio: req.body.precio
    }
    const comida = await Comida.findByIdAndUpdate(id, {$set: body}, {new: true})
    res.json(comida)
}
comidaController.deleteComida = async (req, res) =>{
    const comida = await Comida.findByIdAndDelete(req.params.id)
    res.json(comida)
}

module.exports = comidaController