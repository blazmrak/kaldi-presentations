const router = require('express').Router()
const htmx = require('./presentations/index')

router.use('/presentations', htmx)

router.get('/', (req, res) => {
    res.render('home')
})

module.exports = router