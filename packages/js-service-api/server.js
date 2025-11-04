const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('jsonwebtoken');

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

function verifyToken(req, res, next){
    //console.log("Full Headers: ", JSON.stringify(req.headers, null, 2));
    const authHeader = req.headers['authorization'];
    
    const token = authHeader && authHeader.split(' ')[1];
    if(!authHeader || typeof authHeader !== 'string'){
        return res.status(401).json({message: 'Auth header missing or malformed'})
    }
    else if(!token){
        return res.status(401).json({message: 'No token provided'});
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err){
            return res.status(403).json({message: 'Invalid or expired token'})
        }
        req.user = user;
        next();
    });
}

app.get('/ping', (req, res) => {
    return res.json({message: "pong"});
});

app.post('/protectedping', verifyToken, (req, res) => {
    
    res.json({message: "protected pong"});
});

app.post('/login', (req, res) => {
    const {email, password} = req.body;

    if(email === process.env.EMAIL && password === process.env.PASSWORD){
        const token = jwt.sign(
            { email },
            process.env.JWT_SECRET,
            { expiresIn: '1h'}
        );
        return res.json({message: "login successful", token: token});   
    }
    else{
        return res.status(401).json({message: "Invalid username or password"});
    }
});

app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`));