import React from 'react';
import { useNavigate } from "react-router-dom";
import API from '../services/api';

function MovieCard({ movie, role }) {
  const navigate = useNavigate();


  const handleBookNow = () => {
    navigate(`/select-seats/${movie.id}`);
  };

  const handleCancel = async () => {
    try {
      await API.delete(`/api/movies/${movie.id}`);
      alert("Movie cancelled successfully");
      window.location.reload();
    } catch (error) {
      alert("Failed to cancel movie");
    }
  };

  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p><strong>Language:</strong> {movie.language}</p>
        <p><strong>City:</strong> {movie.city}</p>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Showtime:</strong> {movie.showtime || '9:00 PM'}</p>

        {role === 'PARTNER' ? (
          <button className="btn btn-danger" onClick={handleCancel}>
            Cancel Movie
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleBookNow}>
            Book Now
          </button>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
