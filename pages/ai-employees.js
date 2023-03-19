import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AIEmployees() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/ai-employees');
        if (!res.ok) {
          throw new Error(`An error occurred: ${res.statusText}`);
        }
        const data = await res.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching AI employees:', error);
        setError(error.message);
      } finally {
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
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
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
