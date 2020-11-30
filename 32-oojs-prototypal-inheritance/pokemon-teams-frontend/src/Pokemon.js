class Pokemon {

  constructor({ id, species, nickname, trainer_id }){
    this.id = id
    this.species = species
    this.nickname = nickname
    this.trainer_id = trainer_id
    this.element = document.createElement('li')
  }

  renderListItem(){
    this.element.innerText = `${this.nickname} (${this.species})`

    const releasePokemon = document.createElement('button')
    releasePokemon.className = "release"
    releasePokemon.dataset.pokemonId = this.id
    releasePokemon.innerText = "Release"

    this.element.appendChild(releasePokemon)
    return this.element
  }
}
