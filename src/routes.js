const express = require("express")
const nameGenerator = require("./Controllers/NameGenController")

const routes = express.Router()

routes.get('/names', (req, res) => {

    const startupNameList = nameGenerator.generateNameList(req.body.listSize)

    
})