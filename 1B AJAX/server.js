const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Define an empty array to store the users
const users = [];

app.post('/users', (req, res) => {
    const user = req.body;

    // Store the user data in the array
    users.push(user);

    // Return a success response
    res.status(200).json({ message: 'User registered successfully.' });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
