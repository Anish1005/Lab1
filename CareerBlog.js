import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CareerBlog = () => {
  const [articles, setArticles] = useState([]);
  const [contact, setContact] = useState({ name: '', message: '' });

  useEffect(() => {
    axios.get('/api/articles').then(res => setArticles(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/contact', contact).then(() => {
      alert('Message sent!');
      setContact({ name: '', message: '' });
    });
  };

  return (
    <div>
      <h1>Career Guidance Blog</h1>
      {articles.map(article => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })} />
        <textarea placeholder="Your Message" value={contact.message} onChange={e => setContact({ ...contact, message: e.target.value })} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default CareerBlog;
