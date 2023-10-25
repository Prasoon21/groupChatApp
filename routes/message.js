const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res, next) => {
    fs.readFile('username.txt', (err, data) =>{
        if(err){
            console.log(err);
            data = 'No chat exists';
        }
        res.send(`${data}<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST"><input type="text" name="message" id="message" placeholder="message"><input type="hidden" name="username" id="username"><button type="submit">Send</button></form>`);
    })
    
});

router.post('/', (req, res, next) => {
    console.log(req.body.username);
    console.log(req.body.message);

    fs.writeFile("username.txt", `${req.body.username}: ${req.body.message} `, {flag: 'a'}, (err) => err ? console.log(err): res.redirect('/'));
    
    //res.redirect('/');
    
});

module.exports = router;