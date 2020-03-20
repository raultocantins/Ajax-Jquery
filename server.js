const express = require('express')
const Bodyparser = require('body-parser')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.static('.'))
app.use(Bodyparser.urlencoded({ extended: true }))
app.get('/pag1', function (req, res) {
    res.redirect('./pages/pag1.html')
})
app.get('/pag2', function (req, res) {
    res.redirect('./pages/pag2.html')
})
app.get('/pag3', function (req, res) {
    res.redirect('./pages/pag3.html')

})
const porta = 8080
app.listen(porta, function () {
    console.log('Servidor rodando na porta 8080')
})