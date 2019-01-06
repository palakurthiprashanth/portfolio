const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    app.use('/',express.static(path.join(__dirname, '/')));
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});