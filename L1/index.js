// console.log("chai aur code");
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello DC World!')
})
app.get('/twitter', (req, res) => {
    res.send('Twitter')
})

app.get('/login', (req, res) => {
    res.send('<h1>Nitin Yadav</h1>')
})
app.get('/youtube', (req, res) => {
    res.send('youtube')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})