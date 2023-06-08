// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import { AiOutlineSearch } from 'react-icons/ai';
import MovieCard from './MovieCard';

const API_URL = 'https://www.omdbapi.com/?apikey=6c406151';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies();
  }, []);

  const handleSearch = () => {
    searchMovies(searchItem);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="container">
      <h2>MovieLand</h2>

      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search your movie"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <AiOutlineSearch className="search-icon" onClick={handleSearch}  />
      </div>

      {movies?.length > 0 ? (
        <div className="movie-container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <h2 className="no-movies">Sorry, No Movies Found</h2>
      )}
    </div>
  );
};

export default App;
