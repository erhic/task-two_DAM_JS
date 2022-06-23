const button5 = document.querySelector("#plusFive")
const indicator = document.querySelector("#number-indicator")
const disp = document.querySelector("#display-heading")

button5.addEventListener('click', () => {
  disp.textContent = "added 5"
  indicator.textContent = (parseInt(indicator.textContent) + 5).toString()
})

const button10 = document.querySelector("#plusTen")
const indicators = document.querySelector("#number-indicator")
const disps = document.querySelector("#display-heading")

button10.addEventListener('click', () => {
  disps.textContent = "added 5"
  indicators.textContent = (parseInt(indicators.textContent) + 10).toString()
})

const button15 = document.querySelector("#plusFifteen")
const indicators1 = document.querySelector("#number-indicator")
const disps1 = document.querySelector("#display-heading")

button15.addEventListener('click', () => {
  disps1.textContent = "added 15"
  indicators1.textContent = (parseInt(indicators1.textContent) + 15).toString()
})

const button20 = document.querySelector("#plusTwenty")
const indicator2 = document.querySelector("#number-indicator")
const disps2 = document.querySelector("#display-heading")

button20.addEventListener('click', () => {
  disps2.textContent = "added 20"
  indicator2.textContent = (parseInt(indicator2.textContent) + 20).toString()
})