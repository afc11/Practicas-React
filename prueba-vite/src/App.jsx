import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList'
import './App.css'; 


export default function App() {
  const [pokemones, setPokemones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const obtenerPokemones = async () => {
      try {
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        const datos = await respuesta.json();
        
        setPokemones(datos.results);
        setCargando(false);
      } catch (error) {
        console.error("Error al traer los Pokémon:", error);
        setCargando(false);
      }
    };

    obtenerPokemones();
  }, []);

  const filteredPokemons = pokemones.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

 return (
    <main className="contenedor-principal">
      <h1>Pokédex Simple</h1>
      <hr />

      <SearchBar search={search} setSearch={setSearch} />

      {cargando ? (
        <p>Cargando tus Pokémon favoritos...</p>
      ) : (
        <div>
          <h3>Resultados de la búsqueda:</h3>
          
         <PokemonList pokemones={filteredPokemons} />

          {filteredPokemons.length === 0 && (
            <p className="mensaje-vacio">No se encontraron Pokémon con ese nombre.</p>
          )}
        </div>
      )}
    </main>
  );
}