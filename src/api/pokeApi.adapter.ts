// Clase creada para la inyección de dependencias (que realizará las peticiones Http en 06-injections.ts)

// importamos Axios (es una librería que sirve para peticiones Http)
import axios from "axios";

export class PokeApiAdapter {

    // declaramos una variable 
    private readonly axios = axios;

    // petición GET (de tipo de dato genérico T)
    async get<T> (url: string) {

        const {data} = await this.axios.get<T>(url);

        return data;
    }
}