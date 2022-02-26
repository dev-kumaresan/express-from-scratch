const express = require('express');
const app = express();
app.get('/hi',(req,res)=>{
    res.send("Hi kumaresan");
})
app.get('/about', (req, res) => {
    res.send("Hi kumaresan I am from Alangudi");
})
//LocalHost creation
app.listen(2001,()=>{
    console.log("Server started on 2001");
});
