const express = require('express');
const app = express();
const cookie_parser = require('cookie-parser');
app.use(cookie_parser());
app.get('/',function(req,res){
res.cookie('name','express').send('cookie set');
});
app.listen(3000); //end
