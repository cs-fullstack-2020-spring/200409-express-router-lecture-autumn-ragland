// 20-04-09 Express Router Lecture

let express = require('express');
let app = express();

let flowers = require('./routes/flowers.js');
let trees = require('./routes/trees.js');

app.use('/flowers', flowers);
app.use('/trees', trees);

app.listen(8000, () => {
    console.log('Listening on port 8000');
})