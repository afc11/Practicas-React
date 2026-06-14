import { useState, useEffect } from 'react';
import './PokemonDetail.css';

export default function PokemonDetail({ pokemon, alCerrar }) {
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
    <div className="modal-detalle">
      <div className="tarjeta-detalle">
        <button className="boton-cerrar" onClick={alCerrar}>X</button>
        
        {cargando ? (
          <p>Cargando datos del Pokémon...</p>
        ) : (
          detalle && (
            <div>
              <h2 className="detalle-nombre">{detalle.name}</h2>
              <img 
                className="detalle-imagen"
                src={detalle.sprites.other['official-artwork'].front_default || detalle.sprites.front_default} 
                alt={detalle.name} 
              />
              <div className="info-grupo">
                <p><strong>Altura:</strong> {detalle.height / 10} m</p>
                <p><strong>Peso:</strong> {detalle.weight / 10} kg</p>
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