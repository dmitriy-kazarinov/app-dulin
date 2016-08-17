var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds161295.mlab.com:61295/app-dulin');
//create schema
var comment = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    time: Number
});

var AppDulin = mongoose.model('App-dulin', comment);

//var firstComment = AppDulin({
//    name: 'Kandice Saldivar',
//    email: 'kandice@test.com',
//    message: 'test',
//    time: 1432387623918
//}).save(function(err){
//    if(err)
//        throw err;
//    console.log('Comment saved');
//});

app.use(express.static(__dirname + '/app'));
app.use('/node_modules', express.static('node_modules'));
app.use('/app', express.static('app'));

app.get('/api/comments', function(req, res){
    AppDulin.find({}, function(err, data){
        if(err)
            throw err;
        res.json(data);
    });
});

app.listen('8888', function(){
    console.log('Server running');
});