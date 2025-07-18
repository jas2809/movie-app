import React, { useState } from 'react';

function AddMovieForm({ onSubmit }) {
  const [movie, setMovie] = useState({ title: '', description: '', language: '', genre: '', city: '' });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(movie);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Add New Movie</h3>
      {['title', 'description', 'language', 'genre', 'city'].map((field) => (
        <div className="mb-3" key={field}>
          <label className="form-label">{field}</label>
          <input name={field} className="form-control" value={movie[field]} onChange={handleChange} />
        </div>
      ))}
      <button type="submit" className="btn btn-success">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;