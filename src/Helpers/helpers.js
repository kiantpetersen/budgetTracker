function getCode(day) {
    switch (day) {
        case 'Mon':
            return '22'
        case 'Tue':
            return '33'
        case 'Wed':
            return '44'
        case 'Thu':
            return '55'
        case 'Fri':
            return '66'
        case 'Sat':
            return '77'
        case 'Sun':
            return '11'
        default:
            return null;
    }
}
function getDay(id) {
    switch (String(id).slice(0, 2)) {
        case '22':
            return 'Mon'
        case '33':
            return 'Tue'
        case '44':
            return 'Wed'
        case '55':
            return 'Thu'
        case '66':
            return 'Fri'
        case '77':
            return 'Sat'
        case '11':
            return 'Sun'
        default:
            return null

    }


}
export { getCode, getDay }