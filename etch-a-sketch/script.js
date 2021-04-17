const changeBtn = document.querySelector('.change-btn')
const startBtn = document.querySelector('.start-btn')
const resetBtn = document.querySelector('.reset-btn')
const divContainer = document.querySelector('.div-container')
let startSketching

function makeGrid(size) {
    for(let i = 0; i < size * size; i++) {
        const divs = document.createElement('div')
        divs.classList.add('box')
        divContainer.appendChild(divs)
    }
}

function makeRgb(div) {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    div.style.background = bgColor 
}

function drawOnMousemove() {
    startSketching = true
    const divs = document.querySelectorAll('.box')
    if(startSketching){
        divs.forEach(div => {
            div.addEventListener('mousemove', () => makeRgb(div))
        })
    }
}

function reset() {
    const container = document.querySelector('.div-container')
    container.innerHTML = ''
    makeGrid(16)
}

function resize() {
    let size =  prompt('change the size: ')
    const container = document.querySelector('.div-container')
    container.innerHTML = ''
    makeGrid(size)
}

startBtn.addEventListener('click', drawOnMousemove)
resetBtn.addEventListener('click', reset)
changeBtn.addEventListener('click', resize)
makeGrid(16)






