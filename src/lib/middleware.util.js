function htmx() {
    return (req, res, next) => {
        res.refresh = () => {
            return res.set('HX-Refresh', 'true')
        }

        res.trigger = (event) => {
            return res.set('HX-Trigger', event)
        }

        res.triggerAfterSwap = (event) => {
            return res.set('HX-Trigger-After-Swap', event)
        }

        res.triggerAfterSettle = (event) => {
            return res.set('HX-Trigger-After-Settle', event)
        }

        res.push = (path) => {
            return res.set('HX-Push', path)
        }

        req.isHtmx = () => {
            return req.header('HX-Request') === 'true'
        }

        req.triggeredBy = () => {
            return req.header('HX-Trigger')
        }

        next()
    }
}

module.exports = {
    htmx
}