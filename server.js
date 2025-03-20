const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// User Data File
const dataFile = './data/users.json';

// Register Endpoint
app.post('/register', (req, res) => {
    const { name, age, gender, email, password } = req.body;

    const users = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    const userExists = users.find(user => user.email === email);

    if (userExists) {
        res.json({ success: false, message: 'User already exists' });
    } else {
        users.push({ name, age, gender, email, password });
        fs.writeFileSync(dataFile, JSON.stringify(users, null, 2));
        res.json({ success: true, message: 'Registration successful' });
    }
});

// Login Endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const users = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.json({ success: false, message: 'Invalid credentials' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
