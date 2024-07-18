import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import { TailSpin } from "react-loader-spinner";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  const fetchMovies = async () => {
    if (!query.trim()) {
      setError("Please enter a movie name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movies.");
      }

      const data = await response.json();
      const movieData = data.docs.slice(0, 10); // Limiting to 10 results

      if (movieData.length === 0) {
        setError("No movies found for the given query.");
        setMovies([]);
      } else {
        const moviesWithImages = await Promise.all(
          movieData.map(async (movie) => {
            const dogResponse = await fetch(
              "https://dog.ceo/api/breeds/image/random"
            );
            if (!dogResponse.ok) {
              throw new Error("Failed to fetch dog images.");
            }

            const dogData = await dogResponse.json();
            return { ...movie, dogImage: dogData.message };
          })
        );

        setMovies(moviesWithImages);
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
      setError("Failed to fetch movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Movie Search with Random Dogs</h1>
      <SearchBar query={query} setQuery={setQuery} fetchMovies={fetchMovies} />
      {error && <p className="error-message">{error}</p>}
      {loading ? (
        <div className="loader-container">
          <TailSpin color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
}

export default App;
