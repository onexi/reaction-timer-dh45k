
// This will be the node Express server that will serve up your app
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3030;
const path = require('path');
// these are some of the libraries you will need

// Array to hold the form data
let formData = [];

// This will allow us to parse the body of POST requests
app.use(bodyParser.json());

// Serve the web page with the form
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// Handle the form submission via fetch
app.post('/input', (req, res) => {
    const { name, reactionTime, submissionDate } = req.body;

    // No need to escape here, you trust the client
    // Add the new user to the array
    formData.push({ name, reactionTime, submissionDate });

    // Send the updated list of users back as JSON
    res.json(formData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});