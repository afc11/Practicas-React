# Proyecto React

Proyecto Pokédex simple en React utilizando `useState`, `useEffect` y `fetch`.

## Objetivo

Crear una aplicación en React que:
- Muestre una lista de Pokémon obtenidos desde la API.
- Permita buscar Pokémon por nombre.
- Muestre detalles del Pokémon seleccionado.
- Tenga componentes separados.
- Utilice `useState` para manejar estados.
- Utilice `useEffect` para cargar datos.
- Realice llamadas `fetch` a la API.

## Instalación

Para este proyecto usaremos [Vite](https://vite.dev/guide/)

```sh
cd ejercicios/proyecto_react

pnpm create vite
# Ingresar un nombre, seleccionar React y Javascript
```



## Estructura del proyecto

```sh
src/
├── components/
│   ├── SearchBar.jsx
│   ├── PokemonList.jsx
│   └── PokemonCard.jsx
├── App.jsx
└── main.jsx
```

> [!tip]
> Trabajar sobre `App.jsx`

## Funcionalidades

### 1. Cargar Pokémon al iniciar

Al abrir la aplicación:

```js
https://pokeapi.co/api/v2/pokemon?limit=20
```

Obtiene los primeros 20 pokémones y guardarlos en un estado.

> [!tip]
> - Usar `useEffect(() => {}, [])` para hacer el llamado a `fetch`.
> - Crear un estado `pokemones` para almacenar la lista.

### 2. Barra de búsqueda

Crear un componente de búsqueda con un input que permita filtrar por nombre. 

El componente debe recibir el estado `search` y su función `setSearch` como parámetro y modificarlo con un `<input>`

```js
function SearchBar({ search, setSearch }) {
...
}
```

En el componente principal filtrar usando esta función

```js
const filteredPokemons = pokemones.filter((pokemon) =>
  pokemon.name.toLowerCase().includes(search.toLowerCase())
);
```

### 3. Listar Pokémon

Cada pókemon se debe mostrar en un componente independiente.

```jsx
<PokemonList pokemones={pokemones}/>
```

Dentro:

```jsx
// Usar map para hacer multiples llamados a 
<PokemonCard pokemon={pokemon}/>
```

### 4. Favoritos

Agregar un botón a cada pokemon que permita seleccionarlos como favoritos.

<img width="232" height="252" alt="image" src="https://github.com/user-attachments/assets/03ba5275-c1f3-4e6f-80f0-ddc35a9a7628" />

- Crear una función que permita al pokemon seleccionado modificar la propiedad `favorite: true` (hay que agregarsela a cada pokemon) y actualizar el estado donde se almacena la lista de pokemones.
- Crear una función que permita al pokemon seleccionado modificar la propiedad `favorite: false` y actualizar el estado donde se almacena la lista de pokemones
- Listar por separado solo los pokemones favoritos (`favorite: true`) (listar en un componente separado)

> [!Tip]
> La lista de pokemones está en `App.jsx` y los pokemones están en `PokemonCard.jsx` por lo tanto es necesario hacer las funciones en `App` y pasarle por parámetro a `PokemonCard`
> 
> `App.jsx` -> `PokemonList.jsx` -> `PokemonCard.jsx`

### 5. Navegación

Crear un componente `nav` con links dentro que nos permitan simular una navegación.

En vez de colocar una url utilizar `#` antes de una palabra para indicar a que página navegar

```html
<a href="#pokemones">Pokemones</a>
```

<img width="416" height="263" alt="image" src="https://github.com/user-attachments/assets/ef667814-3ccb-4956-a373-565537ce212d" />

Crear un estado que permita indicar que página se debería renderizar. 

```js
const [page, setPage] = useState("");
```

Cada link debe modificar este estado y utilizarlo para mostrar u ocultar los componentes (páginas) que se deberían mostrar.

### 6. Información de pokemon

Al hacer click en un pokemon se debe abrir un modal (en css `position: fixed`) mostrando más información del pokemon:

- peso
- altura
- habilidades

<img width="896" height="886" alt="image" src="https://github.com/user-attachments/assets/cebea829-9774-4c98-8cc5-76e890cc24ae" />

- Crear un componente `PokemonInfo` que reciba un pokemon por parámetro y muestre la información solicitada.
- En `PokemonCard` al hacer click renderizar el nuevo componente `PokemonInfo` y permitir cerrarlo.

> [!Tip]
> El componente de la imagen tiene un div que usando css ocupa todo el ancho y todo el alto de la pantalla y se muestra como fixed.
>
> Ese componente tiene como hijo otro div que se encarga de mostar la información
