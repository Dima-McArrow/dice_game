console.info('Dice game V0.7')

// Score Player One
const scoreOne = document.getElementById('score__player-0')

// Score Player Two
const scoreTwo = document.getElementById('score__player-1')


// Random num gen
const dice = () => {
  return (Math.floor(Math.random() * 6) + 1)
}

// Roll button
const rollButton = document.getElementById('roll__dice')

// Current score Player 1 HTML
const pOneCurCont = document.getElementById('current_score__player-0')

// Current score Player 2 HTML
const pTwoCurCont = document.getElementById('current_score__player-1')

// Initialization of the score at 0
let currentScore = 0

// Active player
let activePlayer = 0


console.info('button:', rollButton)

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
    pOneCurCont.textContent = currentScore
  }
})

// Dice roll visualisation function
const rollDiceVisual = (dice) => {
  const cont = document.getElementById('dice')
  cont.classList.remove('hidden')
  let content = `<img src="./images/dice-${dice}.svg" alt="dice" />`
  cont.innerHTML = content
}


