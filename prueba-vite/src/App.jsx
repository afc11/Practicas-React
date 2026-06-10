import { useState, useEffect } from 'react';

export default function App() {
  const [pokemones, setPokemones] = useState([]);
  const [cargando, setCargando] = useState(true);

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

  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Pokédex Simple</h1>
      <hr />

      {cargando ? (
        <p>Cargando tus Pokémon favoritos...</p>
      ) : (
        <div>
          <h3>Lista de Pokémon Iniciales:</h3>
          <ul>
            {pokemones.map((pokemon, index) => (
              <li key={index} style={{ textTransform: 'capitalize', padding: '5px 0' }}>
                {pokemon.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}