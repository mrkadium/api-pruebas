const express = require('express')
const router = express.Router()
const path = require('path')

const context = '/'
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/../index.html'))
    //__dirname : It will resolve to your project folder.
})

module.exports = router