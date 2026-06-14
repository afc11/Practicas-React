import PokemonCard from './PokemonCard';

export default function PokemonList({ pokemones, alSeleccionarPokemon }) {
  return (
    <ul className="lista-pokemon">
      {pokemones.map((pokemon, index) => (
        <PokemonCard
          key={index}
          pokemon={pokemon}
          alHacerClick={() => alSeleccionarPokemon(pokemon)}
        />
      ))}
    </ul>
  );
}