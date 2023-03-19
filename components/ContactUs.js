import { useState } from 'react';

const ContactUs = () => {
  // Define state for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Update form data when input values change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform client-side validation
    // ...

    try {
      const response = await fetch('/api/contact/submit-contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Server error! Status: ${response.status}`);
      }

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactUs;
