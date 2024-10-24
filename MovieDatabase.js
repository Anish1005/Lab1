import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieDatabase = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/api/movies').then(res => setMovies(res.data));
  }, []);

  return (
    <div>
      <h1>Static Movie Database</h1>
      {movies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.year} - {movie.genre}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieDatabase;
