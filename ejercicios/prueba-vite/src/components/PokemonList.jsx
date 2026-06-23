import PokemonCard from './PokemonCard';

export default function PokemonList({ pokemones, alSeleccionarPokemon, alAlternarFavorito }) {
  return (
    <ul className="lista-pokemon">
      {pokemones.map((pokemon, index) => (
        <PokemonCard
          key={index}
          pokemon={pokemon}
          alHacerClick={() => alSeleccionarPokemon(pokemon)}
          alFavoritoClick={() => alAlternarFavorito(pokemon.name)}
        />
      ))}
    </ul>
  );
}