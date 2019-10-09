const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb+srv://oministack:oministack@oministack-f1kph.mongodb.net/startupgen?retryWrites=true&w=majority', {

    useNewUrlParser: true,
    useUnifiedTopology: true

})

app.use(express.json())
app.use(cors)

app.listen(process.env.PORT || 3333)