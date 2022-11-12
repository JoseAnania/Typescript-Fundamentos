// Archivo creado en TS para repasar los Decoradores (que son funciones)

// definimos un Decorador (que es una función de flecha que devuelve una función "target")
const MyDecorator = () => {

    return (target: Function) => {

        console.log(target);
    }
}

// usamos el Decorador
@MyDecorator()

// creamos una clase 
export class SoccerTeam {

    constructor(
        
        public readonly id: number,
        public name: string,
    ) {}

    // método que devuelve el nombre en mayúscula
    scream() {

        console.log(`${this.name.toUpperCase()}!!`);
    }

    // método que devuelve el nombre
    speak() {

        console.log(`${this.name}`);
    }
}

// exportamos la clase
export const team = new SoccerTeam(1, 'Manchester City');

// llamamos los métodos
team.scream();
team.speak();