let pokemonList = [
    {
        name : 'Bulbasaur',
        height : 2,
        type : ['grass', 'poison']
    },

    {    
        name : 'Ivysaur',
        height : 3,
        type : ['grass', 'poison']
    },

    {
        name : 'Venusaur',
        height : 6,
        type : ['grass', 'poison']
    },
];

function myLoopFunction(pokemon) {
    if (pokemon.height >1.0 && pokemon.height <=5) {
        document.write(pokemon.name + 'Height:' + pokemon.height + 'WOW That\'s big!' + '<br/>');
    } else if (pokemon.height >5) {
        document.write(pokemon.name + 'Height:' + pokemon.height + 'THATS HUGE!!!' + '<br/>');
    } else{
        document.write(pokemon.name + 'Height' + pokemon.height + 'So tiny i can barely see it' + '<br/>');
    }
}
pokemonList.forEach(myLoopFunction);