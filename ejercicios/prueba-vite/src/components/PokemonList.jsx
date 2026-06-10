import PokemonCard from './PokemonCard';

export default function PokemonList({ pokemones }) {
  return (
    <ul className="lista-pokemon">
      {pokemones.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </ul>
  );
}