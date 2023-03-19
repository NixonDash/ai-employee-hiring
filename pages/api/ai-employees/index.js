// pages/api/ai-employees/index.js
const aiEmployees = [
  {
    id: 1,
    name: 'AI Developer 1',
    industry: 'Software Development',
  },
  {
    id: 2,
    name: 'AI Project Manager 1',
    industry: 'Management',
  },
  // Add more AI employees as needed
];

export default function handler(req, res) {
  res.status(200).json(aiEmployees);
}
