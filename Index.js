/* En array är en lista med värden. Kan ha noll till flera värden. 
* Värdena kan vara av vilken datatyp som helst.
* Det går att blanda olika datatyper i en array men det rekommenderas ej.
*/
let myArray = []; //hak-parenteser [] visar att det handlar om 'Array'
let pokemons = ["Charmander", "Bulbasaur", "Squirtle"];
let numbers = [1, 2, 3, 4, 5];
let mix = ['Pikachu', 1, 2, "Charmander", true];
/*Indexering
* När man hämtar en Array säger man att man indexerar.
* Första värdet i listan har index 0 och sista värdet har indexlängden-1.
* En lista på 10 stycken värden går från 0 till 9. 
* Försöker man komma åt ett element utanför sin Array får man "undefined".
*/

pokemons.length -> 4
pokemons[0]; -> 'Pikachu'
pokemons[pokemons.length - 1]; -> 'Squirtle'


/* PROPERTIES
* Finns på många värden inom JavaScript och nås genom att . och egenskapens namn
*length är en egenskap som både arrayer och strängar har
*Ex. myArray.length returnerar längden på arrayen.

*METODER:
*Finns för ett antal fördefinierade metoder för arrayer.
* Några av dessa är: push(), pop(), indexOf().
