const express = require('express');
// const data = require('./data');

//const fs = require('fs');

const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login" method="POST"><input type="text" name="title" id="username"><button type="submit">login</button></form>')

});

router.post('/login', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;