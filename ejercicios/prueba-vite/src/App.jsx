import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList'
import PokemonDetail from './components/PokemonDetail';
import './App.css';


export default function App() {
  const [pokemones, setPokemones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [search, setSearch] = useState('');

  const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null);

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

      {misFavoritos.length > 0 && (
        <div className="seccion-favoritos">
          <h3>⭐ Mis Pokémon Favoritos:</h3>
          <PokemonList
            pokemones={misFavoritos}
            alSeleccionarPokemon={setPokemonSeleccionado}
            alAlternarFavorito={alternarFavorito}
          />
          <hr />
        </div>
      )}

      <SearchBar search={search} setSearch={setSearch} />

      {cargando ? (
        <p>Cargando tus Pokémon favoritos...</p>
      ) : (
        <div>
          <h3>Resultados de la búsqueda:</h3>

          <PokemonList
            pokemones={filteredPokemons}
            alAlternarFavorito={alternarFavorito}
            alSeleccionarPokemon={setPokemonSeleccionado} />

          {filteredPokemons.length === 0 && (
            <p className="mensaje-vacio">No se encontraron Pokémon con ese nombre.</p>
          )}
        </div>
      )}

      {pokemonSeleccionado && (
        <PokemonDetail
          pokemon={pokemonSeleccionado}
          alCerrar={() => setPokemonSeleccionado(null)}
          alFavoritoClick={() => alternarFavorito(pokemonSeleccionado.name)}
        />
      )}
    </main>
  );
}
