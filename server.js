require('dotenv').config()

const express=require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const ct = require('./controller')

const app = express()

const {CONNECTION_STRING} = process.env

app.use(bodyParser.json())

massive(CONNECTION_STRING).then((db) =>{
    app.set('db', db)
    console.log("Funky Towne Has Das Data!")
    app.listen(3000,console.log("Welcome to Das Funky Towne, listening on port 3k!"))
}).catch(err => console.log(err))

app.post('/api/product', ct.createProduct)

app.get('/api/products', ct.getProducts)
app.get('/api/product/:id', ct.getProduct)

app.delete('/api/product/:id', ct.deleteProduct)

app.put('/api/product/:id', ct.updateProduct)
