const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

let storedData = null; // Variable to store the data

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/data', (req, res) => {
    storedData = req.body; // Store the received data
    console.log('Received data from Python:', storedData);

    // Send a response back to the Python script
    const responseData = { message: 'Data received successfully', receivedData: storedData };
    res.json(responseData);
});

// Endpoint to get the stored data
app.get('/data', (req, res) => {
    if (storedData) {
        console.log('Serving stored data:', storedData);
        res.json(storedData);
    } else {
        console.log('No data found');
        res.status(404).json({ error: 'No data found' });
    }
});

app.listen(port, () => {
    console.log(`Node.js server running on port ${port}`);
});
