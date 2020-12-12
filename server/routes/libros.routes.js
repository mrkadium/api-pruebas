const express = require('express')
const router = express.Router()

const librosController = require('../controllers/libros.controller')

const context = '/libros/'
router.get(context+'', librosController.getLibros)
router.get(context+':id', librosController.getLibro)
router.post(context+'', librosController.createLibro)
router.put(context+':id', librosController.updateLibro)
router.delete(context+':id', librosController.deleteLibro)

module.exports = router