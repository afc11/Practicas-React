import { useState, useEffect } from 'react';
import './PokemonInfo.css';

export default function PokemonDetail({ pokemon, alCerrar, alFavoritoClick }) {
  const [detalle, setDetalle] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (!pokemon) return;

    const obtenerDetalles = async () => {
      setCargando(true);
      try {
        const respuesta = await fetch(pokemon.url);
        const datos = await respuesta.json();
        setDetalle(datos);
        setCargando(false);
      } catch (error) {
        console.error("Error al traer detalles del Pokémon:", error);
        setCargando(false);
      }
    };

    obtenerDetalles();
  }, [pokemon]);

  if (!pokemon) return null;

  return (
    <div className="modal-detalle" onClick={alCerrar}>

      <div className="tarjeta-detalle" onClick={(e) => e.stopPropagation()}>
        <button className="boton-cerrar" onClick={alCerrar}>X</button>

        {cargando ? (
          <p>Cargando datos del Pokémon...</p>
        ) : (
          detalle && (
            <div>
              <h2 className="detalle-nombre">{detalle.name}</h2>

              <button
                className={`boton-favorito-detalle ${pokemon.favorite ? 'es-favorito' : ''}`}
                onClick={alFavoritoClick}
              >
    {pokemon.favorite ? '⭐' : '☆'}
              </button>

              <img
                className="detalle-imagen"
                src={detalle.sprites.other['official-artwork'].front_default || detalle.sprites.front_default}
                alt={detalle.name}
              />
              <div className="info-grupo">
                <p><strong>Altura:</strong> {detalle.height / 10} m</p>
                <p><strong>Peso:</strong> {detalle.weight / 10} kg</p>
              </div>

              <div className="habilidades-contenedor">
                <strong>Habilidades:</strong>
                <div className="lista-habilidades">
                  {detalle.abilities.map((h, i) => (
                    <span key={i} className="habilidad-etiqueta">
                      {h.ability.name.replace('-', ' ')}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="tipos-contenedor">
                <strong>Tipos:</strong>
                {detalle.types.map((t, i) => (
                  <span key={i} className={`tipo-etiqueta tipo-${t.type.name}`}>
                    {t.type.name}
                  </span>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}