function int(string, defaultInt) {
    if(string == null) {
        return defaultInt ?? null
    }

    return parseInt(string, 10)
}

module.exports = {
    int
}