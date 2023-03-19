// pages/pricing.js
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Pricing = () => {
  const [pricingData, setPricingData] = useState([]);

  useEffect(() => {
    fetch('/api/pricing')
      .then((response) => response.json())
      .then((data) => setPricingData(data));
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h1>Pricing</h1>
        {pricingData.map((industryData) => (
          <div key={industryData.id}>
            <h2>{industryData.industry}</h2>
            <ul>
              {industryData.pricing.map((priceData) => (
                <li key={priceData.role}>
                  {priceData.role}: ${priceData.price} / month
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
