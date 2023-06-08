// MovieCard.jsx
import React from 'react';

const MovieCard = ({ movie }) => {
  const handleMovieClick = () => {
    window.location.href = `https://www.imdb.com/title/${movie.imdbID}`;
  };

  return (
    <div className="movie" onClick={handleMovieClick}>
      <p>{movie.Year}</p>
      <img
        src={movie.Poster === 'N/A' ? 'https://via.placeholder.com/400' : movie.Poster}
        alt={movie.Title}
        className="movie-poster"
      />
      <span className="movie-type">{movie.Type}</span>
      <h3 className="movie-title">{movie.Title}</h3>
    </div>
  );
};

export default MovieCard;
