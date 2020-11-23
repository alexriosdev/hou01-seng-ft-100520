const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded',() => {
  getTrainers()
})

const getTrainers = () => {
  fetch(TRAINERS_URL)
  .then(res => res.json())
  .then(trainers => {
    trainers.forEach(trainer => renderTrainerCard(trainer))
  })
}

const renderTrainerCard = (trainer) => {

  const cardParent = document.querySelector('main')

  const trainerCard = document.createElement('div')
  trainerCard.className = "card"
  trainerCard.dataset.id = trainer.id

  // Child elements
  const trainerName = document.createElement('p')
  trainerName.innerText = trainer.name

  const addPokemonBtn = document.createElement('button')
  addPokemonBtn.dataset.trainerId = trainer.id
  addPokemonBtn.innerText = "Add Pokemon"

  addPokemonBtn.addEventListener('click',(e) => {
    addNewPokemonFetch(e)
  })

  const pokemonList = document.createElement('ul')
  trainer.pokemons.forEach(pokemon => {
    const pokemonListItem = renderPokemonListItem(pokemon)
    pokemonList.appendChild(pokemonListItem)
  })

  trainerCard.appendChild(trainerName)
  trainerCard.appendChild(addPokemonBtn)
  trainerCard.appendChild(pokemonList)

  cardParent.appendChild(trainerCard)
}



const addNewPokemonFetch = (e) => {
  const trainer_id = e.target.dataset.trainerId

  fetch(POKEMONS_URL,{
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ trainer_id: trainer_id })
  }).then(res => res.json())
  .then(pokemon => {
    if(renderNewPokemonLI(pokemon)){
      alert('Team size cannot exceed 6 pokemons.')
    }else{
      const buttonParent = e.target.parentElement
      const pokemonList = buttonParent.querySelector('ul')
      const pokemonListItem = renderPokemonListItem(pokemon)
      pokemonList.appendChild(pokemonListItem)
    }

  })
}

const renderNewPokemonLI = (pokemon) => pokemon.hasOwnProperty('message')


const releasePokemonFetch = (e) => {
  const pokemon_id = e.target.dataset.pokemonId

  // Optimistic Rendering
  const pokemonListItem = e.target.parentElement
  pokemonListItem.remove()


  fetch(`${POKEMONS_URL}/${pokemon_id}`,{
    method: "DELETE"
  }).then(res => res.json())
  .then(pokemon => {
    // Passimistic Rendering
    // const pokemonListItem = e.target.parentElement
    // pokemonListItem.remove()
    alert(`${pokemon.nickname} was released ✋🏻`)
  })
}




const renderPokemonListItem = (pokemon) => {
  const pokemonListItem = document.createElement('li')
  pokemonListItem.innerText = `${pokemon.nickname} (${pokemon.species})`

  const releasePokemon = document.createElement('button')
  releasePokemon.className = "release"
  releasePokemon.dataset.pokemonId = pokemon.id
  releasePokemon.innerText = "Release"
  releasePokemon.addEventListener('click', (e) => {
    releasePokemonFetch(e)
  })

  pokemonListItem.appendChild(releasePokemon)
  return pokemonListItem
}
