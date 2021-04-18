let findTheOldest = function(arr) {
    let ages = []
    for(let i = 0; i < arr.length; i++) {
        let obj = arr[i]
        if(!obj['yearOfDeath']) {
            obj['yearOfDeath'] = new Date().getFullYear()
        }
            ages.push(obj['yearOfDeath'] - obj['yearOfBirth'])           
    }
    const oldestIndex = ages.indexOf(Math.max(...ages))
    return arr[oldestIndex]
}

module.exports = findTheOldest