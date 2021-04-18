const getTheTitles = function(arr) {
    let titles = []
    for(let i = 0; i < arr.length; i++) {
        let obj = arr[i]
        for(let key in obj) {
            if(key == 'title'){
                titles.push(obj[key])
            }          
        }
    }
    return titles
}

module.exports = getTheTitles;
