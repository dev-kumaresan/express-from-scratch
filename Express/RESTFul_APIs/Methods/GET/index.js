const express = require('express');
const app = express();
const PORT = 4000;
app.get('/hi',(req,res)=>{
    res.send("Hi kumaresan");
})
app.listen(PORT,()=>{
    console.log("Server started at port 4000");
})

