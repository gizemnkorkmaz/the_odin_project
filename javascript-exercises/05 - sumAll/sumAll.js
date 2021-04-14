const sumAll = function(num1, num2) {
    let sum
    if(num1 < 0 || num2 < 0 || 
        typeof num1 !== 'number' || 
        typeof num2 !== 'number') return 'ERROR'
    if(num1 < num2) {
        sum = num1
        for(let i = num1 + 1; i <= num2; i++) {
            sum += i
       }
   } else if(num1 > num2) {
    sum = num2
    for(let i = num2 + 1; i <= num1; i++) {
        sum += i
   }
}
   return sum
}

module.exports = sumAll