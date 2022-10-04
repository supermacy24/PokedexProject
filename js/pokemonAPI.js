$(function () {

 
  let pokemonObject ={};

  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(function (allpokemon) {
      allpokemon.results.forEach(function (pokemon) {
        fetchPokemonData(pokemon);
      })
    })
  // .then(allpokemon => console.log(allpokemon))

  function fetchPokemonData(pokemon) {
    let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
    fetch(url)
      .then(response => response.json())
      .then(function (pokeData) {

        
        let types = pokeData.types
        let pokemonTypeArray = [];
        types.forEach(function (type) {
          let pokemonType = type['type']['name']
          pokemonTypeArray.push(pokemonType)
        })

        
        pokemonObject = {
          id: pokeData.id,
          name: pokeData.name,
          sprite: pokeData.sprites.versions["generation-v"]["black-white"].animated.front_default,
          types:pokemonTypeArray
        }

        let pokemonArray=[pokemonObject]
        
        pokemonListDisplay(pokemonObject)
        search(pokemonArray)
      })
  }

 

})

