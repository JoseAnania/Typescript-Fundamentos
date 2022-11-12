// Archivo creado en TS para repasar la Inyección de Dependencias

import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { PokeApiAdapter } from '../api/pokeApi.adapter';

// definimos una clase
export class Pokemon3 {

    constructor(
        public readonly id: number,
        public name: string,

        // inyectamos la dependencia de la clase (pokeApiAdapter)
        private readonly http: PokeApiAdapter,
    ) {}

    // método asincrónico
    async getMoves(): Promise<Move[]> {

        // llamamos al método Get de la inyección (del tipo PokeapiResponse)
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        
        // mostramos por consola los "Movimientos" del pokemón (según data de la API)
        console.log(data.moves);

        return data.moves;
    }

}

// creo una instancia de la inyección
const pokeApi = new PokeApiAdapter();

// creo un Pokemon3
export const poke = new Pokemon3(1, 'Charmander', pokeApi);

// llamamos al método
poke.getMoves();


