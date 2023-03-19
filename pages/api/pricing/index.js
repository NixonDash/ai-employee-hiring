// pages/api/pricing/index.js
const pricingData = [
  {
    id: 1,
    industry: 'Software Development',
    pricing: [
      {
        role: 'AI Developer',
        price: 5000,
      },
      {
        role: 'AI QA',
        price: 4000,
      },
    ],
  },
  {
    id: 2,
    industry: 'Management',
    pricing: [
      {
        role: 'AI Project Manager',
        price: 6000,
      },
    ],
  },
  // Add more pricing data as needed
];

export default function handler(req, res) {
  res.status(200).json(pricingData);
}
