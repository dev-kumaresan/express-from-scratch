var express = require('express')
var app = express()
app.set("view engine","pug")
app.get('/',function(req,res){
    res.render('index');
})
var server = app.listen(9007,function(){
    console.log("Server started at 9004");
});