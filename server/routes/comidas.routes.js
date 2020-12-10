const express = require('express')
const router = express.Router()

const comidaController = require('../controllers/comida.controller')

router.get('/', comidaController.getComidas)
router.get('/:id', comidaController.getComida)
router.post('/', comidaController.createComida)
router.put('/:id', comidaController.updateComida)
router.delete('/:id', comidaController.deleteComida)

module.exports = router