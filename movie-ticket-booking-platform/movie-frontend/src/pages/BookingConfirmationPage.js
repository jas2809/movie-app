import React from 'react';
import { useLocation } from 'react-router-dom';

function BookingConfirmationPage() {
  const { state } = useLocation();
  return (
    <div className="container">
      <h2>Booking Confirmed!</h2>
      <p><strong>Movie:</strong> {state.movie}</p>
      <p><strong>Showtime:</strong> {state.showtime}</p>
      <p><strong>Seats:</strong> {state.seats}</p>
      <p>Thank you for booking with us!</p>
    </div>
  );
}

export default BookingConfirmationPage;