export default function PokemonCard({ pokemon, alHacerClick, alFavoritoClick }) {
  return (
    <li className="tarjeta-pokemon" onClick={alHacerClick}>
      <span className="nombre-pokemon">{pokemon.name}</span>

      <button 
        className={`boton-favorito ${pokemon.favorite ? 'es-favorito' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          alFavoritoClick();
        }}
      >
        {pokemon.favorite ? '⭐' : '☆'}
      </button>

    </li>
  );
}