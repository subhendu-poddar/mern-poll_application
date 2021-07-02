const mongoose = require('mongoose')

mongoose.set('debug', true)
mongoose.Promise = global.Promise

const mongoUrl = "mongodb+srv://sp:sp1999@cluster0.r77ai.mongodb.net/Poll?retryWrites=true&w=majority"

mongoose.connect(mongoUrl || 'mongodb://localhost/pollApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


module.exports.User = require('./User')
module.exports.Poll = require('./Poll')