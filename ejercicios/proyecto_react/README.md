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