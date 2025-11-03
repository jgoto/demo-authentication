const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();


app.use(express.json());

app.get('/ping', (req, res) => {
    res.json({message: "pong"});
});

app.post('/login', (req, res) => {
    const {username, password} = req.body;

    if(username === process.env.USERNAME && password === process.env.PASSWORD){
        res.json({message: "login successful"});
    }
    else{
        res.status(401).json({message: "Invalid username or password"});
    }
})

app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`));