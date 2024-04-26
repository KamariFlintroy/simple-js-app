let pokemonRepository = (function () {
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

        function add(pokemon) {
            pokemonList.push(pokemon);
        }

        function addListitem(pokemon) {
            let pokemonListItems = document.querySelector('.pokemon-list');
            let listItem = document.createElement('li');
            let button = document.createElement('button');
            button.innerText = pokemon.name;
            button.classList.add('button-class');
            listItem.appendChild(button);
            pokemonListItems.appendChild(listItem)
            button.addEventListener('click', function(){showDetails(pokemon);});
        }

        function showDetails(pokemon) {
            console.log(pokemon);
        }
        
        function getAll() {
            return pokemonList;
        }
        return {
            add: add,
            getAll: getAll,
            addListitem: addListitem
        };
}) ();

pokemonRepository.getAll().forEach( function (pokemon) {
    pokemonRepository.addListitem(pokemon);
});