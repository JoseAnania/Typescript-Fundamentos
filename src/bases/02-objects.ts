// Archivo creado en TS para repasar los objetos

// definimos un arreglo
export const pokemonId: number[] = [1,20,30,34,66];

// método nativo para agregar datos al arreglo
pokemonId.push(10);

// para definir el tipo de un objeto utilizamos las Interfaces
interface Pokemon {
    id: number,
    name: string,
    age?: number
}

// definimos un objeto del tipo de la Interface
export const pokemon1: Pokemon = {
    id: 1,
    name: 'Bulbasaur'
}

export const pokemon2: Pokemon = {
    id: 2,
    name: 'Charmander'
}

// definimos un arreglo del tipo de la Interface
export const pokemons: Pokemon[] = [];

// agregamos los Objetos al arreglo
pokemons.push(pokemon1, pokemon2);

// mostramos por consola
console.log(pokemons);