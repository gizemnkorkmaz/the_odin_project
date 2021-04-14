let computerPoints = 0
let playerPoints = 0
let playCount = 0

const result = document.querySelector('.result')
const compResult = document.querySelector('.computer')
const playerResult = document.querySelector('.player')
const buttons = document.querySelectorAll('.btn')

buttons.forEach(button => 
    button.addEventListener('click', () => playRound(button.value)))


function computerPlay() {
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerChoice) {
    let computerChoice = computerPlay()

    if((playerChoice == 'rock' && computerChoice == 'scissors') ||
    (playerChoice == 'paper' && computerChoice == 'rock') ||
    (playerChoice == 'scissors' && computerChoice == 'paper')) {
        playerResult.innerHTML = `You: ${playerPoints+=1}`
        result.innerHTML = `${playerChoice} vs. ${computerChoice}! You got 1 point!`
        if(playerPoints == 5) {
            result.innerHTML = `You won.`
        }
    } else if ((playerChoice == computerChoice)) {
        result.innerHTML = `${playerChoice} vs. ${computerChoice}! It's a tie!`
    }
    else {
        compResult.innerHTML = `Computer: ${computerPoints+=1}`
        result.innerHTML = `${playerChoice} vs. ${computerChoice}! I got 1 point!`
        if(computerPoints == 5) {
            result.innerHTML = `I won.`
        }
    }

}
