require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')

const app = express()

let { SERVER_PORT, CONNECTION_STRING } = process.env;


massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('database connected')
})

app.use(express.json())

app.get('/api/allHouses')
app.post('/api/allHouses')

app.listen(SERVER_PORT, () => {
    console.log(`theres a snake in my boot on ${SERVER_PORT}`)
})