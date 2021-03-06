const express = require('express')
const app = express()

const {mongoose} = require('./database')

//settings
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(express.json())

//routes
app.use('', require('./routes/app.routes'))
app.use('/api', require('./routes/comidas.routes'))
app.use('/api', require('./routes/libros.routes'))

//init server
app.listen(app.get('port'), () => console.log("SERVER RUNNING"))