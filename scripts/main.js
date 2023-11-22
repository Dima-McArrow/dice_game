console.info('Dice game V1.0')

// Score Player One
const scoreOne = document.getElementById('score__player-0')
scoreOne.textContent = 0
let pOneAct = document.getElementById('red-dot-0')
// Score Player Two
const scoreTwo = document.getElementById('score__player-1')
scoreTwo.textContent = 0
let pTwoAct = document.getElementById('red-dot-1')

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
  let content = `<img src="./images/dice-${dice}.svg" alt="dice" />`
  cont.innerHTML = content
}

// Switch player function
const switchPlayer = () => {
  // Active player deactivation
  document.getElementById(`current_score__player-${activePlayer}`).textContent = 0
  document.getElementById(`player-${activePlayer}`).classList.remove('active')
  pOneAct.classList.toggle('hidden')
  pTwoAct.classList.toggle('hidden')
  // Switching player
  activePlayer = activePlayer === 0 ? 1 : 0
  // Current score reset
  currentScore = 0
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
    document.getElementById(`player-${activePlayer}`).classList.add('active')
    document.getElementById(`current_score__player-${activePlayer}`).textContent = currentScore
  } else {
    // Switching player
    switchPlayer()
  }
})

// Hold button action
holdButton.addEventListener('click', (e) => {
  // Prevent defaul
  e.preventDefault()
  scores[activePlayer] += currentScore
  document.getElementById(`score__player-${activePlayer}`).textContent = scores[activePlayer]
  if (scores[activePlayer] >= 100) {
    document.getElementById(`player-${activePlayer}`).classList.add('winner')
    document.querySelector('.current-0').classList.add('hidden')
    document.querySelector('.current-1').classList.add('hidden')
    document.querySelector(`.winner-${activePlayer}`).classList.remove('hidden')
    document.getElementById(`red-dot-${activePlayer}`).classList.add('hidden')
    document.getElementById('dice').classList.add('hidden')
    document.getElementById('roll__dice').classList.add('hidden')
    document.querySelector('.hold__score').classList.add('hidden')
  } else {
    // Switching player
    switchPlayer()
  }
})

// New Game button action
newGame.addEventListener('click', (e) => {
  // Prevent default
  e.preventDefault()
  // Reloading the page
  window.location.reload()
})