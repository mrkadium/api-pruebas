const express = require('express')
const morgan = require('morgan')
const app = express()

const {mongoose} = require('./database')

//settings
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'))
app.use(express.json())

//routes
app.use('/api/comidas', require('./routes/comidas.routes'))

//init server
app.listen(app.get('port'), () => console.log("SERVER RUNNING"))