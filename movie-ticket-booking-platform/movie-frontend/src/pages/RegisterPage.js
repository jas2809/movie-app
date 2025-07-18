import React, { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
  const [form, setForm] = useState({
    username: '', password: '', role: 'CUSTOMER'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_USER_SERVICE}/api/users/register`, form);
      alert('Registered successfully! You can now log in.');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input name="username" className="form-control mb-2" onChange={handleChange} placeholder="Username" />
        <input type="password" name="password" className="form-control mb-2" onChange={handleChange} placeholder="Password" />
        <select name="role" className="form-control mb-2" onChange={handleChange}>
          <option value="CUSTOMER">Customer</option>
          <option value="PARTNER">Theatre Partner</option>
        </select>
        <button type="submit" className="btn btn-success">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;