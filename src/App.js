import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import { ThreeDots } from "react-loader-spinner";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (query) => {
    setLoading(true);
    axios
      .get(`https://openlibrary.org/search.json?q=${query}`)
      .then((response) => {
        setMovies(response.data.docs);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="app">
      <h1 className="hii">Movie Search with Random Dogs</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <div className="loader-container">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#00BFFF"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        </div>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default App;
