var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app'));
app.use('/node_modules', express.static('node_modules'));
app.use('/app', express.static('app'));

app.listen('8888', function(){
    console.log('Server running');
});