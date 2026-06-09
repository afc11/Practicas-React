const RenderizarLista = () => {
  const ALUMNOS = [
    "Lucas N",
    "Lucas A",
    "Lautaro",
    "Agustín",
    "Valentino",
    "Sebastian",
  ];

  const Alumno = ({ nombre }) => {
    return (
      <div className="card-alumno">
        <p>{nombre}</p>
      </div>
    );
  };

  return (
    <div>
      <h2>Lista de Alumnos</h2>

      {ALUMNOS.map((item) => {
        return <Alumno nombre={item} key={item} />;
      })}
    </div>
  );
};

export default RenderizarLista;
