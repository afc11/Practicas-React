import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList'
import PokemonInfo from './components/PokemonInfo';
import './App.css';


export default function App() {
  const [pokemones, setPokemones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [search, setSearch] = useState('');

  const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null);

  const [page, setPage] = useState("inicio");

  useEffect(() => {
    const obtenerPokemones = async () => {
      try {
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        const datos = await respuesta.json();

        const pokemonesConFavoritos = datos.results.map(pokemon => ({
          ...pokemon,
          favorite: false
        }));

        setPokemones(pokemonesConFavoritos);
        setCargando(false);

      } catch (error) {
        console.error("Error al traer los Pokémon:", error);
        setCargando(false);
      }
    };

    obtenerPokemones();
  }, []);

  const alternarFavorito = (nombrePokemon) => {
    const listaActualizada = pokemones.map((pokemon) => {
      if (pokemon.name.toLowerCase() === nombrePokemon.toLowerCase()) {
        const pokemonActualizado = { ...pokemon, favorite: !pokemon.favorite };

        if (pokemonSeleccionado && pokemonSeleccionado.name === pokemon.name) {
          setPokemonSeleccionado(pokemonActualizado);
        }

        return pokemonActualizado;
      }
      return pokemon;
    });
    setPokemones(listaActualizada);
  };

  const misFavoritos = pokemones.filter(pokemon => pokemon.favorite === true);

  const filteredPokemons = pokemones.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="contenedor-principal">
          
      <h1>Pokédex Simple</h1>

      <hr />

      <nav className="barra-navegacion">
        <a href="#inicio" onClick={() => setPage("inicio")} className={page === "inicio" ? "activo" : ""}>Inicio</a>
        <a href="#pokemones" onClick={() => setPage("pokemones")} className={page === "pokemones" ? "activo" : ""}>Pokédex</a>
        <a href="#favoritos" onClick={() => setPage("favoritos")} className={page === "favoritos" ? "activo" : ""}>Mis Favoritos ({misFavoritos.length})</a>
      </nav>

      
      {page === "inicio" && (
        <div>
          <h2>Bienvenido</h2>
          <p>Seleccioná una opción en la barra de navegación para empezar.</p>
        </div>
      )}

      {page === "favoritos" && (
        <div>
          {misFavoritos.length > 0 ? (
            <div className="seccion-favoritos">
              <h3>⭐ Mis Pokémon Favoritos:</h3>
              <PokemonList
                pokemones={misFavoritos}
                alSeleccionarPokemon={setPokemonSeleccionado}
                alAlternarFavorito={alternarFavorito}
              />
              <hr />
            </div>
          ) : (
            <p className="mensaje-vacio">No tenés ningún Pokémon guardado en tus favoritos todavía.</p>
          )}
        </div>
      )}

      {page === "pokemones" && (
        <div>
          <SearchBar search={search} setSearch={setSearch} />

          {cargando ? (
            <p>Cargando tus Pokémon favoritos...</p>
          ) : (
            <div>
              <h3>Resultados de la búsqueda:</h3>

              <PokemonList
                pokemones={filteredPokemons}
                alAlternarFavorito={alternarFavorito}
                alSeleccionarPokemon={setPokemonSeleccionado} 
              />

              {filteredPokemons.length === 0 && (
                <p className="mensaje-vacio">No se encontraron Pokémon con ese nombre.</p>
              )}
            </div>
          )}
        </div>
      )}

      {pokemonSeleccionado && (
        <PokemonInfo
          pokemon={pokemonSeleccionado}
          alCerrar={() => setPokemonSeleccionado(null)}
          alFavoritoClick={() => alternarFavorito(pokemonSeleccionado.name)}
        />
      )}
      
    </main>
  );
}