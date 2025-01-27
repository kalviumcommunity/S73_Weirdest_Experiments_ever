const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Route to check server status
app.get('/ping', (req, res) => {
    res.send('Pong!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
