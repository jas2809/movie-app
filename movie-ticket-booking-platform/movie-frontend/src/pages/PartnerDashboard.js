import React, { useEffect, useState } from 'react';
import API from '../services/api';

function PartnerDashboard() {
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState({
    title: '',
    language: '',
    genre: '',
    city: '',
    showtime: ''
  });

  const username = localStorage.getItem('username');

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const res = await API.get(`/api/movies/by-partner`, {
        params: { username },
      });
      setMovies(res.data);
    } catch (err) {
      alert('Failed to fetch movies');
    }
  };

  const handleAddMovieWithShowtime = async () => {
    try {
      // Add Movie
      const res = await API.post('/api/movies/add', {
        title: form.title,
        language: form.language,
        genre: form.genre,
        city: form.city,
        username,
      });

      const movieId = res.data.id;

      // Add Showtime
      if (form.showtime) {
        await API.post('http://localhost:8082/api/showtimes/add', {
          movieId,
          time: form.showtime,
        });
      }

      setForm({
        title: '',
        language: '',
        genre: '',
        city: '',
        showtime: '',
      });

      fetchMovies();
    } catch (err) {
      alert('Failed to add movie or showtime');
    }
  };

  const handleDeleteMovie = async (id) => {
    try {
      await API.delete(`/api/movies/${id}`);
      fetchMovies();
    } catch (err) {
      alert('Failed to delete movie');
    }
  };


  return (
    <div className="container mt-4">
      <h2>Partner Dashboard</h2>

      <div className="my-4">
        <h5>Add New Movie</h5>
        <input className="form-control mb-2" placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })} />

        <input className="form-control mb-2" placeholder="Language"
          value={form.language}
          onChange={(e) => setForm({ ...form, language: e.target.value })} />

        <input className="form-control mb-2" placeholder="Genre"
          value={form.genre}
          onChange={(e) => setForm({ ...form, genre: e.target.value })} />

        <input className="form-control mb-2" placeholder="City"
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })} />

        <input className="form-control mb-2" placeholder="Showtime (e.g. 5:30 PM)"
          value={form.showtime}
          onChange={(e) => setForm({ ...form, showtime: e.target.value })} />

        <button className="btn btn-primary" onClick={handleAddMovieWithShowtime}>Add Movie</button>
      </div>

      <div>
        <h4>Your Movies</h4>
        {movies.length === 0 ? (
          <p>No movies onboarded.</p>
        ) : (
          <div className="d-flex flex-wrap">
            {movies.map((movie) => (
              <div className="card p-3 m-2" key={movie.id} style={{ width: '250px' }}>
                <h5>{movie.title}</h5>
                <p><b>Language:</b> {movie.language}</p>
                <p><b>Genre:</b> {movie.genre}</p>
                <p><b>City:</b> {movie.city}</p>
                <p><b>Showtimes:</b> {movie.showtimes?.length ? movie.showtimes.join(', ') : 'None'}</p>
                <button className="btn btn-danger" onClick={() => handleDeleteMovie(movie.id)}>Delete Movie</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PartnerDashboard;
