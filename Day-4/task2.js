const express = require('express');
const app = express();

// Route with URL parameter
app.get('/user/:name', (req, res) => {
    const userName = req.params.name;   // get name from URL
    res.send(`Hello ${userName}`);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
