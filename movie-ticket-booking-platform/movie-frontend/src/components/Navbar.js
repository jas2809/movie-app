import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ role }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand" to="/">🎬 MovieBooker</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">

          {/* Partner (B2B) Navigation */}
          {role === 'B2B' && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/partner">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-movie">Add Movie</Link>
              </li>
            </>
          )}

          {/* Customer (B2C) Navigation */}
          {role === 'B2C' && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/browse">Browse Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/my-bookings">My Bookings</Link>
              </li>
            </>
          )}

          {/* Logout (common for both) */}
          <li className="nav-item">
            <Link className="nav-link" to="/">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
