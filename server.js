const express = require('express');
const cors = require('cors');
const app = express();

// Middleware to enable CORS
app.use(cors({
  origin: 'http://localhost:3001' // URL of your frontend
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Example route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Another example route to handle POST requests
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.status(201).json({ message: 'Data received!', data });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

