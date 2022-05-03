function randomId() {
    return Math.ceil(Math.random() * 100_000_000) + 1000
}

module.exports = {
    randomId
}