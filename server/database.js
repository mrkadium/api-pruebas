const mongoose = require('mongoose')

const dbuser = 'root'
const dbpass = 'admin'
const dbname = 'comidas'
const URI = 'mongodb+srv://'+dbuser+':'+dbpass+'@pruebas.1gzlm.mongodb.net/'+dbname+'?retryWrites=true&w=majority'

mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))

module.exports = mongoose