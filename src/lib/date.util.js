function twoDigit(n) {
    return n < 10 ? '0' + n : n
}

function buildReplacement(date) {
    return {
        'yyyy': date.getFullYear(),
        'MM': twoDigit(date.getMonth() + 1),
        'M': date.getMonth() + 1,
        'dd': twoDigit(date.getDate()),
        'd': date.getDate(),
    }
}

function format(date, format) {
    const replacement = buildReplacement(date)
    const regex = Object.keys(replacement).join('|')

    return format.replace(new RegExp(regex, 'g'), (match) => {
        return replacement[match]
    })
}

function uriDate(date) {
    return format(date, 'yyyy-MM-dd')
}

function daysOfMonth(date) {
    const month = date.getMonth()
    const start = new Date(date.getFullYear(), month, 1)
    const dates = []

    while (start.getMonth() === month) {
        dates.push(new Date(start.getTime()))
        start.setDate(start.getDate() + 1)
    }

    return dates
}

function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear()
        && date1.getMonth() === date2.getMonth()
        && date1.getDate() === date2.getDate()
}

function previousMonth(date) {
    const prev = new Date(date)
    prev.setMonth(prev.getMonth() - 1)
    return prev
}

function nextMonth(date) {
    const next = new Date(date)
    next.setMonth(next.getMonth() + 1)
    return next
}

function monthName(month) {
    switch (month) {
        case 0:
            return 'january'
        case 1:
            return 'february'
        case 2:
            return 'march'
        case 3:
            return 'april'
        case 4:
            return 'may'
        case 5:
            return 'june'
        case 6:
            return 'july'
        case 7:
            return 'august'
        case 8:
            return 'september'
        case 9:
            return 'october'
        case 10:
            return 'november'
        case 11:
            return 'december'
    }
}

module.exports = {
    format,
    uriDate,
    daysOfMonth,
    isSameDay,
    previousMonth,
    nextMonth,
    monthName,
}