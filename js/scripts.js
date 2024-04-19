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

for (let i=0; i<pokemonList.length; i++) {

    if (pokemonList[i].height >1.0 && pokemonList[i].height <=5) {
        document.write(pokemonList[i].name + 'Height:' + pokemonList[i].height + 'WOW That\'s big!' + '<br/>');
    } else if (pokemonList[i].height >5) {
        document.write(pokemonList[i].name + 'Height:' + pokemonList[i].height + 'THATS HUGE!!!' + '<br/>');
    } else{
        document.write(pokemonList[i].name + 'Height' + pokemonList[i].height + 'So tiny i can barely see it' + '<br/>');
    }
}