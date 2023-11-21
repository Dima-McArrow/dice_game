console.info('Dice game V0.8')

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

// Current score Player 1 HTML
const pOneCurCont = document.getElementById('current_score__player-0')

// Current score Player 2 HTML
const pTwoCurCont = document.getElementById('current_score__player-1')

// Initialization of the score at 0
let currentScore = 0

// Active player
let activePlayer = 0


console.info('button:', rollButton)

// Random num gen
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

// Roll button action
rollButton.addEventListener('click', (e) => {
  // Prevent defaul
  e.preventDefault()
  // Dice roll
  let diceNum = dice()
  rollDiceVisual(diceNum)
  console.info('dice:', diceNum)
  // Player plays
  if (diceNum !== 1) {
    currentScore += diceNum
    // Active player activation
    document.getElementById(`player-${activePlayer}`).classList.add('active')
    document.getElementById(`current_score__player-${activePlayer}`).textContent = currentScore
    // pOneCurCont.textContent = currentScore
  } else {
    // Active player deactivation
    document.getElementById(`current_score__player-${activePlayer}`).textContent = 0
    document.getElementById(`player-${activePlayer}`).classList.remove('active')
    pOneAct.classList.toggle('hidden')
    pTwoAct.classList.toggle('hidden')
    // document.getElementById(`red-dot-${activePlayer}`).classList.toggle('hidden')
    // Switching player
    activePlayer = activePlayer === 0 ? 1 : 0
    // Score reset
    currentScore = 0
  }
})