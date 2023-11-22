console.info('Bootstrap version | V 0.1')

// Score Player One
const scoreOne = document.getElementById('score__player-0')
scoreOne.textContent = 0
// Score Player Two
const scoreTwo = document.getElementById('score__player-1')
scoreTwo.textContent = 0

// Roll button
const rollButton = document.getElementById('roll__dice')

// Hold button
const holdButton = document.querySelector('.hold__score')

// New Game button
const newGame = document.querySelector('.new__game')

// Initialization of the score at 0
let currentScore = 0

// Active player
let activePlayer = 0

// Scores
let scores = [0, 0]

// Random num gen function
const dice = () => {
  return (Math.floor(Math.random() * 6) + 1)
}

// Dice roll visualisation function
const rollDiceVisual = (dice) => {
  const cont = document.getElementById('dice')
  cont.classList.remove('hidden')
  let content = `<img src="../images/dice-${dice}.svg" alt="dice" />`
  cont.innerHTML = content
}

// Roll button action
rollButton.addEventListener('click', (e) => {
  // Prevent defaul
  e.preventDefault()
  // Dice roll
  let diceNum = dice()
  rollDiceVisual(diceNum)
  // Player plays
  if (diceNum !== 1) {
    currentScore += diceNum
    // Active player activation
    // document.getElementById(`player-${activePlayer}`).classList.add('active')
    // document.getElementById(`current_score__player-${activePlayer}`).textContent = currentScore
  } else {
    // Switching player
    // switchPlayer()
  }
})