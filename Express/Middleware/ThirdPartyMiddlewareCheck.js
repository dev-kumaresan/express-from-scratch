const express = require('express');
const app = express();
const morgan = require('morgan'); //package
const jf = require('../express/package-lock.json');
app.get('/hi',(req,res)=>{
    res.send(jf);
})
app.listen(3033,()=>{
    console.log("server started successfully");
})
///////// THIRD PARTY MIDDLEWARE ///////
app.use(morgan('dev'));
