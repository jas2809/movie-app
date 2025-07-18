import React, { useEffect, useState } from 'react';
import API from '../services/api';

function MyBookingsPage() {
  const [bookings, setBookings] = useState([]);
  const username = localStorage.getItem('username');

  useEffect(() => {
    console.log("username from localStorage:", username);

    if (!username) {
      alert("Username not found. Please log in again.");
      return;
    }

    API.get(`/api/bookings/user/${username}`)
      .then(res => setBookings(res.data))
      .catch((err) => {
        console.error("Failed to load bookings:", err);
        alert('Failed to load bookings');
      });
  }, []);

  return (
    <div className="container mt-4">
      <h3>My Bookings</h3>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="d-flex flex-wrap">
          {bookings.map((booking, idx) => (
            <div className="card p-3 m-2" key={idx} style={{ width: '280px' }}>
              <h5>{booking.movieTitle}</h5>
              <p><b>City:</b> {booking.city}</p>
              <p><b>Showtime:</b> {booking.showtime}</p>
              <p><b>Seats:</b> {booking.seats.join(', ')}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBookingsPage;
