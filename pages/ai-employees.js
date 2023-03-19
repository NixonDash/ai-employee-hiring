// pages/ai-employees.js
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AIEmployees = () => {
  const [aiEmployees, setAIEmployees] = useState([]);

  useEffect(() => {
    fetch('/api/ai-employees')
      .then((response) => response.json())
      .then((data) => setAIEmployees(data));
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h1>AI Employees</h1>
        <ul>
          {aiEmployees.map((employee) => (
            <li key={employee.id}>
              {employee.name} - {employee.industry}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default AIEmployees;
