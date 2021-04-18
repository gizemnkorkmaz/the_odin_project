const fibonacci = function(num) {
    let numbers = [1,1,2]
    let initial = 1
    if(num <= 0) return 'OOPS'
    if(num == 1 || num == 2) return 1
    for(let i = 0; i < num; i++) {
        numbers.push(numbers[numbers.length-2] + numbers[numbers.length-1])
    }
    return numbers[num-1]
}

module.exports = fibonacci