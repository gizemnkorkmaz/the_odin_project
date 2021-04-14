const repeatString = function(string, number) {
    let result = ''
    if(!string) return ''
    if(!string || number < 0) return 'ERROR'
    for(let i = 0; i < number; i++) {
        result += string
    }
    return result
}

module.exports = repeatString