const express = require('express')
const router = express.Router()

const comidaController = require('../controllers/comida.controller')

const context = '/comidas/'
router.get(context+'', comidaController.getComidas)
router.get(context+':id', comidaController.getComida)
router.post(context+'', comidaController.createComida)
router.put(context+':id', comidaController.updateComida)
router.delete(context+':id', comidaController.deleteComida)

module.exports = router