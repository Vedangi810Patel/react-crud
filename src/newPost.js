import React, { useState, useEffect } from 'react';
import './Post.css'; // Import the CSS file containing the styles

const NewPost = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    userId: 1,
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setAllPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        setSubmittedData(data);
        setFormSubmitted(true);
        setAllPosts([...allPosts, data]);
        setFormData({ title: '', body: '', userId: 1 });
      })
      .catch(error => console.error('Error adding new post:', error));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <label>
          Body:
          <textarea name="body" value={formData.body} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div className="submitted-data-container">
          <h2>New Post:</h2>
          <p><strong>ID:</strong> {submittedData.id}</p>
          <p><strong>Title:</strong> {submittedData.title}</p>
          <p><strong>Body:</strong> {submittedData.body}</p>
        </div>
      )}
      {formSubmitted && (
        <div className="table-container">
          <h2>All Posts:</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {allPosts.map(post => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default NewPost;
