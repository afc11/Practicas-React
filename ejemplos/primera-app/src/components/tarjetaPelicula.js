const TarjetaPelicula = ({ url, titulo, descripcion }) => {
  return (
    <div className="card">
      <img src={url} width="200" alt="" />

      <div className="card-content">
        <h2 className="title">{titulo}</h2>

        <p>{descripcion}</p>
      </div>
    </div>
  );
};

export default TarjetaPelicula;
