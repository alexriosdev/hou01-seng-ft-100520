const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded',() => {
  getTrainers()
})

const getTrainers = () => {
  fetch(TRAINERS_URL)
  .then(res => res.json())
  .then(trainers => trainers.forEach(addTrainersToPage))
}

const addTrainersToPage = (trainer) => {
  const trainerObj = new Trainer(trainer)
  const card = trainerObj.renderTrainerCard()
  document.querySelector('main').appendChild(card)
}
