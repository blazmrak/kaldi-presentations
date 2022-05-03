const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('presentations/htmx/index')
})

router.get('/stack', (req, res) => {
    res.render('presentations/htmx/stack')
})

router.get('/basics', (req, res) => {
    res.render('presentations/htmx/basics')
})

router.get('/htmx', (req, res) => {
    res.render('presentations/htmx/htmx')
})

let color = 'green'

router.get('/htmx-demo', (req, res) => {
    res.render('presentations/htmx/htmx-demo', {
        data: {color: color},
        _links: {
            colorPopup: '/presentations/htmx-alpinejs/htmx-demo/color-popup',
            things: '/presentations/htmx-alpinejs/htmx-demo/things'
        },
    })
})

router.get('/htmx-demo/color-popup', (req, res) => {
    res.render('presentations/htmx/color-popup.partial.pug', {
        _links: {
            color: '/presentations/htmx-alpinejs/htmx-demo/color-popup/color',
        },
    })
})

router.put('/htmx-demo/color-popup/color', (req, res) => {
    color = req.body.color
    res.refresh().end()
})


router.put('/htmx-demo/color-popup/color/:color', (req, res) => {
    color = req.params.color
    res.refresh().end()
})

router.get('/htmx-demo/things', (req, res) => {
    const search = req.query.search.toLowerCase()

    const items = ['Elephant', 'Glass', 'Tree', 'Glove', 'Rubber', 'Relic', 'Screen', 'Table', 'Door', 'Ball', 'Cream', 'Roof', 'Camera', 'Electricity']
        .filter(item => item.toLowerCase().includes(search))
        .sort((e1, e2) => e1.localeCompare(e2))
        .slice(0, 10)

    res.render('presentations/htmx/things.partial.pug', {
        data: {
            items
        }
    })
})

router.get('/alpinejs', (req, res) => {
    res.render('presentations/htmx/alpinejs',)
})

router.get('/alpinejs-demo', (req, res) => {
    res.render('presentations/htmx/alpinejs-demo',)
})

router.get('/ending', (req, res) => {
    res.render('presentations/htmx/ending',)
})


module.exports = router