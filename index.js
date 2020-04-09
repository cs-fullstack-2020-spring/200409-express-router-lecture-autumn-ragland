// 200409 Express Router Lecture

// creating server
let express = require('express');
let app = express();

// variable for port number
let portNumber = 8000;

// import router modules
let flowers = require('./routes/flowers.js');
let trees = require('./routes/trees.js');

// mount routes
app.use('/flowers', flowers);
app.use('/trees', trees);

// allow server to listen on port number
app.listen(portNumber, () => {
    console.log(`Listening on port ${portNumber}`);
});