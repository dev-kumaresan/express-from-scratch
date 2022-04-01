const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.get('/',(req,res)=>{
res.cookie('name', 'value', {expires: new Date(new Date().getTime()+60*1000)}).send('cookie-expiration-set'); 
});
app.listen(8000,()=>{
    console.log('server started on 8000');
});