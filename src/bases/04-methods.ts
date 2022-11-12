// Archivo creado en TS para repasar los Métodos de Clases

// definimos una clase
export class RockBand {

    constructor(
        public readonly id: number,
        public name: string,
    ) {}

    // Método Getter
    get logo(): string {

        return `https://rock.com/${this.id}.jpg`;
    }

    // Métodos Tradicional (función)
    public scream() {
        console.log(`${this.name.toUpperCase()}`);
    }

    public speak() {
        console.log(`${this.name}`);
    }
}

// creo una banda
export const rollingStones = new RockBand(1, 'The Rolling Stones');

// el Getter se puede usar como una propiedad (aunque no fue definida como tal)
rollingStones.logo;

