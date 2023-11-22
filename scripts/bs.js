console.info('Bootstrap version | V 1.0')

// Score Player One
const scoreOne = document.getElementById('score__player-0')
scoreOne.textContent = 0
// Score Player Two
const scoreTwo = document.getElementById('score__player-1')
scoreTwo.textContent = 0

// Badge
let activeBadgeOne = document.querySelector('.badge-0')
let activeBadgeTwo = document.querySelector('.badge-1')

// Active player
const pOne = document.getElementById('p-0')
const pTwo = document.getElementById('p-1')

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

// Switch player function
const switchPlayer = () => {
  // Active player deactivation
  document.getElementById(`current_score__player-${activePlayer}`).textContent = 0
  // Switching the active player space
  pOne.classList.toggle('opacity-75')
  pTwo.classList.toggle('opacity-75')
  // Switching the active badge
  activeBadgeOne.classList.toggle('visually-hidden')
  activeBadgeTwo.classList.toggle('visually-hidden')
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
    // Active player current score count
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
    document.querySelector(`.winner-${activePlayer}`).classList.remove('visually-hidden')
    document.getElementById('dice').classList.add('visually-hidden')
    document.getElementById('roll__dice').classList.add('visually-hidden')
    document.querySelector('.hold__score').classList.add('visually-hidden')
    document.querySelector(`.b-playing-${activePlayer}`).classList.add('visually-hidden')
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