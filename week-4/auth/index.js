const express = require('express');

const app = express();
const users=[];

app.use(express.json());


app.post('/signup', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message:"Successfully signed up"
    })


})

app.post('/signin', function(req, res){
    
})

app.listen(3000);