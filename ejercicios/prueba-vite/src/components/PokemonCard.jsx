export default function PokemonCard({ pokemon }) {
  return (
    <li className="tarjeta-pokemon">
      <span className="nombre-pokemon">{pokemon.name}</span>
    </li>
  );
}