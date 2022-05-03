const router = require('express').Router()
const htmx = require('./htmx-alpinejs/index')

router.use('/htmx-alpinejs', htmx)

module.exports = router