const express = require('express');

const app = express()

app.get('/hello',(request,response)=>{
    const g = request.query
   console.log( request.url);
    console.log(g);
})

app.listen(3000,()=>{
    console.log("server is running");
})
