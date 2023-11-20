console.info('Dice game V0.5')

const dice = () => {
  return (Math.floor(Math.random() * 6) + 1)
}


const rollButton = document.getElementById('roll__dice')

console.info('button:', rollButton)

rollButton.addEventListener('click', (e) => {
  e.preventDefault()
  let diceNum = dice()
  rollDiceVisual(diceNum)
  console.info('dice:', diceNum)
})

const rollDiceVisual = (dice) => {
  const cont = document.getElementById('dice')
  let content = `<img src="./images/dice-${dice}.svg" alt="dice" />`
  cont.innerHTML = content
}