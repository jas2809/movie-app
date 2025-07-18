import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SeatSelectionPage = () => {
  const { movieId } = useParams(); // getting the movie ID from URL
  const navigate = useNavigate();

  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = Array.from({ length: 30 }, (_, i) => i + 1); // seat numbers 1 to 30

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleConfirmBooking = () => {
    alert(`Booking confirmed for Movie ID: ${movieId}, Seats: ${selectedSeats.join(', ')}`);
    navigate('/my-bookings'); // change route if needed
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Select Your Seats (Movie ID: {movieId})</h3>

      <div className="d-flex flex-wrap" style={{ maxWidth: '360px' }}>
        {seats.map(seat => (
          <button
            key={seat}
            className={`btn m-1 ${selectedSeats.includes(seat) ? 'btn-success' : 'btn-outline-secondary'}`}
            onClick={() => toggleSeat(seat)}
          >
            {seat}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <h5>Selected Seats: {selectedSeats.join(', ') || 'None'}</h5>
        <button
          className="btn btn-primary mt-3"
          onClick={handleConfirmBooking}
          disabled={selectedSeats.length === 0}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default SeatSelectionPage;
