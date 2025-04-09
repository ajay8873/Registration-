
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

let registrations = [];

// Get all registrations
app.get('/api/registrations', (req, res) => {
    res.json(registrations);
});

// Add new registration
app.post('/api/registrations', (req, res) => {
    const newRegistration = {
        id: Date.now(),
        ...req.body,
        timestamp: new Date().toLocaleString()
    };
    registrations.push(newRegistration);
    res.status(201).json(newRegistration);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
