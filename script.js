const totalscores = { computerScore: 0, playerScore: 0 }

function getComputerChoice() {
    let item = ["Rock", "paper", "Scissors"]
    const randomhand = Math.floor(Math.random() * item.length)
    return item[randomhand]
}
console.log(getComputerChoice())
function getResult(playerChoice, computerChoice) {

    let score
    if (playerChoice == computerChoice) {
        score = 0
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        score = 1
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        score = 1
    }
    else if (playGame == 'Scissors' && computerChoice == 'Paper') {
        score = 1
    } else {
        score = -1
        totalscores['computerScore'] += 1
    }
    return score
}
function showResult(score, playerChoice, computerChoice) {

    const resultDiv = document.getElementById('result');
    const handsDiv = document.getElementById('hands');
    const playerScoreDiv = document.getElementById('player-score');
    const ComputerscoreDiv = document.getElementById('Computer-score');
    if (score == 1) {
        resultDiv.innerText = 'You Won!'
    } else if (score == 0) {
        resultDiv.innerText = "It's a tie"
    } else {
        resultDiv.innerText = 'You Lose'
    }
    handsDiv.innerText = `${playerChoice} V/S ${computerChoice} `;
    playerScoreDiv.innerText = `player : ${totalscores['playerScore']} ` ;
    ComputerscoreDiv.innerText = `computer : ${totalscores['computerScore'] }`
}
function onClickRPS(playerChoice) {
    console.log({ playerChoice })
    const computerChoice = getComputerChoice()
    console.log({ computerChoice })
    const score = getResult(playerChoice, computerChoice)
    totalscores['playerScore'] += score
    console.log(score)
    showResult(score, playerChoice, computerChoice)
}
function playGame() {

    const rpsButton = document.querySelectorAll('.rpsButton')

    rpsButton.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })
    const endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick=() => endGame(totalscores)
}
function endGame(totalscores) {
    const resultDiv = document.getElementById('result');
    const handsDiv = document.getElementById('hands');
    const playerScoreDiv = document.getElementById('player-score');
    const ComputerscoreDiv = document.getElementById('Computer-score');
totalscores['computerScore'] = 0 ;
totalscores['playerScore'] = 0 ;
 resultDiv.innerText = '' ;
 handsDiv.innerText = '' ;
 playerScoreDiv.innerText = '' ;
 ComputerscoreDiv.innerText = '' ;
}

playGame()