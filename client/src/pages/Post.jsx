import React, { useState } from 'react';


function Admin() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting project:', formData);
    // Later we’ll send this to the backend!
  };

  return (
    <div>
      <h2>Admin Panel – Add a Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />

        <label>Project Link (GitHub/Live Site):</label>
        <input type="text" name="link" value={formData.link} onChange={handleChange} required />

        <label>Image URL:</label>
        <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />

        <button type="submit">Post Project</button>
      </form>
    </div>
  );
}

export default Admin;