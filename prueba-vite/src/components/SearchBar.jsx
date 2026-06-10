import './SearchBar.css';

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Buscar Pokémon por nombre..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}