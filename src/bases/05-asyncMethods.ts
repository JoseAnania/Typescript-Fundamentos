// Archivo creado en TS para repasar los Métodos Asíncronos

import axios from "axios";
import { PokeapiResponse, Move } from '../interfaces/pokeapi-response.interface';

// definimos una clase
export class Pokemon2 {

    constructor(
        public readonly id: number,
        public name: string,
    ) {}

    // método asincrónico
    async getMoves(): Promise<Move[]> {

        // creamos una constante desestructurada con la API de POKEMONAPIS del tipo PokeapiResponse (Interface)
        const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
        
        // mostramos por consola los "Movimientos" del pokemón (según data de la API)
        console.log(data.moves);

        return data.moves;
    }

}

// creo un Pokemon2
export const pokemon = new Pokemon2(1, 'Charmander');

// llamamos al método
pokemon.getMoves();
