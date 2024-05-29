// app.js

require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Additional routes
app.get('/about', (req, res) => {
    res.send('About Page');
});

app.post('/data', (req, res) => {
    const data = req.body;
    res.send(`Data received: ${JSON.stringify(data)}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
