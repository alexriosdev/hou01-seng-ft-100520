class Trainer {

  constructor({ id, name, pokemons }){
    this.id = id
    this.name = name
    this.pokemons = pokemons
    this.element = document.createElement('div')
  }

  renderTrainerCard() {
    this.element.className = "card"
    this.element.dataset.id = this.id

    const trainerName = document.createElement('p')
    trainerName.innerText = this.name

    const addPokemonBtn = document.createElement('button')
    addPokemonBtn.dataset.trainerId = this.id
    addPokemonBtn.innerText = "Add Pokemon"

    const pokemonList = document.createElement('ul')
    this.pokemons.forEach(pokemon => {
      const pokemonObj = new Pokemon(pokemon)
      const pokemonListItem = pokemonObj.renderListItem()
      pokemonList.appendChild(pokemonListItem)
    })

    this.element.appendChild(trainerName)
    this.element.appendChild(addPokemonBtn)
    this.element.appendChild(pokemonList)

    return this.element
  }
}
