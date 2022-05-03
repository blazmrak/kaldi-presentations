const express = require('express')
const path = require('path')
const pug = require('pug')
const {htmx} = require('./lib/middleware.util')

const app = express()
app.locals = {
    $env: {
        isDevelopment: process.env.NODE_ENV === 'development',
    },
}
app.engine('pug', pug.__express)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

const api = require('./router/index')

app.use(htmx())
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use('/', api)

app.listen(3000)
