const palindromes = function(str) {
    const newStr = str.toLowerCase().replace(/[^A-Za-z]/g, "")
    const reversed = newStr.split('').reverse().join('')
    if(newStr == reversed){
        return true
    } else {
        return false
    }
}

module.exports = palindromes