import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AIEmployees() {
  // State variables for employees, error, and loading
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch AI employees data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading state to true before API call
        setLoading(true);
        const res = await fetch('/api/ai-employees');
        if (!res.ok) {
          // Throw an error if the response is not ok
          throw new Error(`An error occurred: ${res.statusText}`);
        }
        const data = await res.json();
        setEmployees(data);
      } catch (error) {
        // Handle errors and set error state
        console.error('Error fetching AI employees:', error);
        setError(error.message);
      } finally {
        // Set loading state to false after API call is complete
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h1>AI Employees</h1>
        {loading ? (
          // Display loading message if loading state is true
          <p>Loading...</p>
        ) : error ? (
          // Display error message if error state is not null
          <p>Error: {error}</p>
        ) : (
          // Display list of AI employees if there's no error and loading is complete
          <ul>
            {employees.map((employee) => (
              <li key={employee.id}>{employee.name}</li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
}
