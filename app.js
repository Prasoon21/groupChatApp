const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const messageRoutes = require('./routes/message.js');
const loginRoutes = require('./routes/login.js');

app.use(bodyParser.urlencoded({extended: false}));

app.use(messageRoutes);
app.use(loginRoutes);



const server = http.createServer(app);
server.listen(3000);