let pokemonList = [
    {
        name : "Bulbasaur",
        height : 2,
        type : [grass, poison]
    },

    {    
        name : "Ivysaur",
        height : 3,
        type : [grass, poison]
    },

    {
        name : "Venusaur",
        height : 6,
        type : [grass, poison]
    },
];

for (let i=0; i < pokemonList.height; i++) {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ');

    if (pokemonList[i].height <= 1.0) {
    document.write('<br>');    
    }
    else{
        document.write('WOW That\'s big!');
        document.write('<br>');
    }
}