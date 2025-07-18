import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BrowseMoviesPage from './pages/BrowseMoviesPage';
import PartnerDashboard from './pages/PartnerDashboard';
import BookingConfirmationPage from './pages/BookingConfirmationPage';
import Navbar from './components/Navbar';
import SeatSelectionPage from './pages/SeatSelectionPage';
import { getRoleFromToken } from './auth';
 import MyBookingsPage from './pages/MyBookingsPage';

function App() {
  const [role, setRole] = useState(null);

useEffect(() => {
  const role = getRoleFromToken();
  setRole(role);
}, []);


  return (
    <Router>
      <Navbar role={role} />
      <Routes>
        <Route path="/login" element={<LoginPage setRole={setRole} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/browse" element={<BrowseMoviesPage />} />
        <Route path="/partner" element={<PartnerDashboard />} />
        <Route path="/confirmation" element={<BookingConfirmationPage />} />
        <Route path="/" element={<LoginPage setRole={setRole} />} />
        <Route path="/select-seats/:movieId" element={<SeatSelectionPage />} />


        <Route path="/my-bookings" element={<MyBookingsPage />} />


      </Routes>
    </Router>
  );
}

export default App;
