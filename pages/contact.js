import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Your message has been sent. Thank you!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('An error occurred while submitting the form.');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Header />
      <main>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
