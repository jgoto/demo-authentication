const express = require('express');
const PORT = 5000;
const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
    res.json({message: "pong"});
});

app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`));