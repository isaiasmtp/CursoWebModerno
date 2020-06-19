const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded('body-parser'))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('<h1>Parabens</h1>')
})

app.listen(3003)