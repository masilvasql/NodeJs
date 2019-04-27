var express = require('express')
var consign = require('consign')
var bodyParser = require("body-parser")
var expressValidator = require('express-validator')

var app = express()

app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(express.static('./app/public'))

app.use(bodyParser.urlencoded({extended:true, limit:'50mb'}))
app.use(bodyParser.json({limit:'50mb'}))

app.use(expressValidator())


// efetua o auto load das rotas, models e controllers
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)

module.exports = app
