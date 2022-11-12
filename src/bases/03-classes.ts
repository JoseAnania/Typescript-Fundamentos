// Archivo creado en TS para repasar las Clases

// definimos una clase
export class Pokemon {
    
    // propiedades (readonly no permite la modificación de la propiedad)
    public readonly id: number;
    public name: string;

    // constructor
    constructor(id: number, name: string) {
        
        this.id = id;
        this.name = name;
    }
}

// instancia de la clase
export const charmander = new Pokemon(4, 'Charmander');


// FORMA ABREVIADA
export class PokemonAbreviado {

    constructor(
        public readonly id: number,
        public name: string
    ) {}
}