import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getRoleFromToken } from '../auth';


function LoginPage({ setRole }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(`${process.env.REACT_APP_USER_SERVICE}/api/users/login`, credentials);

    console.log("Login response:", res.data);
    const { token, role } = res.data;

    if (!token || !role) {
      throw new Error("Invalid login response");
    }

    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
//    localStorage.setItem('username', credentials.username);
    localStorage.setItem('username', res.data.username);


    setRole(role);

    if (role === 'PARTNER') {
      navigate('/partner');
    } else {
      navigate('/browse');
    }
  } catch (err) {
    console.error("Login failed", err);
    alert("Login failed");
  }
};





  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input name="username" className="form-control mb-2" onChange={handleChange} placeholder="Username" />
        <input type="password" name="password" className="form-control mb-2" onChange={handleChange} placeholder="Password" />
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;