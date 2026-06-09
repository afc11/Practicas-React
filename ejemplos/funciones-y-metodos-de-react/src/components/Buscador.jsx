import { useState } from "react";

function Buscador() {
  const [search, setSearch] = useState("");

  return (
    <>
      <h2>Buscador</h2>

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <p>texto: {search}</p>
    </>
  );
}

export default Buscador;
