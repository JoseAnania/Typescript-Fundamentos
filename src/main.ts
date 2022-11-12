import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

// importamos las variables de Bases (types.ts)
import {age, name} from './bases/01-types'
import { pokemon1, pokemonId } from './bases/02-objects'
import { charmander } from './bases/03-classes'
import { rollingStones } from './bases/04-methods'
import { pokemon } from './bases/05-asyncMethods'
import { poke } from './bases/06-injection';
import { team } from './bases/07-decorators';

// referencias
rollingStones
pokemon
poke
team

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h3>
      1-Tipos de Datos: ${name} ${age} <br>
      2-Arreglos: ${pokemonId} <br>
      3-Objetos: ${pokemon1.name} <br>
      4-Clases: ${charmander.name} <br>
      5-Métodos: ${rollingStones.scream(), rollingStones.speak()}
    </h3>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
