import React, { useEffect, useState } from 'react';
import API from '../services/api';
import MovieCard from '../components/MovieCard';

function BrowseMoviesPage() {
  const [movies, setMovies] = useState([]);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);

    // Fetch movies (filtered if needed in future)
    API.get('/api/movies/all')
      .then(res => setMovies(res.data))
      .catch(() => alert('Failed to load movies'));
  }, []);

  return (
    <div className="container">
      <h3>Now Showing</h3>
      <div className="d-flex flex-wrap">
        {movies.map((movie, idx) => (
          <MovieCard key={idx} movie={movie} role={role} />
        ))}
      </div>
    </div>
  );
}

export default BrowseMoviesPage;
