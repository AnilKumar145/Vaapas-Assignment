import React from "react";
import "./SearchBar.css";

const SearchBar = ({ query, setQuery, fetchMovies }) => {
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    fetchMovies();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchMovies();
    }
  };

  return (
    <div className="search-bar">
      <input
        id="search-input"
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search for movies..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
