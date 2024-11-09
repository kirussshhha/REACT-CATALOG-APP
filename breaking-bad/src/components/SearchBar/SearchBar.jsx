import "./SearchBar.scss";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Поиск по имени"
      className="search-inp"
    />
  );
}

export default SearchBar;
