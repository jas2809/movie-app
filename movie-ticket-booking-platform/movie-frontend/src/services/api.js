import axios from 'axios';

const getBaseURL = (path) => {
  if (path.startsWith('/api/users')) return process.env.REACT_APP_USER_SERVICE;
  if (path.startsWith('/api/movies')) return process.env.REACT_APP_MOVIE_SERVICE;
  if (path.startsWith('/api/showtimes')) return process.env.REACT_APP_SHOWTIME_SERVICE;
  if (path.startsWith('/api/bookings')) return process.env.REACT_APP_BOOKING_SERVICE;
  return '';
};

const API = axios.create();

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  const baseURL = getBaseURL(req.url);
  req.baseURL = baseURL;
  return req;
});

export default API;
