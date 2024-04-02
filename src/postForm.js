import React, { useState, useEffect } from 'react';

const PostForm = () => {
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Body:
          <textarea name="body" value={formData.body} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <h2>New Post:</h2>
          <p><strong>ID:</strong> {submittedData.id}</p>
          <p><strong>Title:</strong> {submittedData.title}</p>
          <p><strong>Body:</strong> {submittedData.body}</p>
          {/* <p><strong>UserID:</strong> 1</p> */}
        </div>
      )}
      {formSubmitted && (
        <>
          <h2>All Posts:</h2>
          <ul>
            {allPosts.map(post => (
              <li key={post.id}>
                <strong>ID:</strong> {post.id}<br />
                <strong>Title:</strong> {post.title}<br />
                <strong>Body:</strong> {post.body}<br />
                {/* <strong>UserID:</strong>1 */}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default PostForm;