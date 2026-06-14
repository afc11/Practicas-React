export default function PokemonCard({ pokemon, alHacerClick }) {
  return (
    <li className="tarjeta-pokemon" onClick={alHacerClick}>
      <span className="nombre-pokemon">{pokemon.name}</span>
    </li>
  );
}