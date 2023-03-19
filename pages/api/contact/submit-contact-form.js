// Import validation library
import * as yup from 'yup';

// Define validation schema
const schema = yup.object().shape({
  name: yup.string().min(2).max(50).required(),
  email: yup.string().email().required(),
  message: yup.string().min(10).max(1000).required(),
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Validate the form data
      await schema.validate(req.body);

      // Process the form submission (e.g., send an email, store in a database, etc.)
      // ...

      // Send a successful response
      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      // Handle validation errors
      res.status(400).json({ message: error.message });
    }
  } else {
    // Only accept POST requests
    res.status(405).json({ message: 'Method not allowed' });
  }
}
