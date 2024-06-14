let express = require('express');
let app = express();

app.use(express.static(__dirname + '/src'));

app.listen('3000');
console.log('working on 3000');