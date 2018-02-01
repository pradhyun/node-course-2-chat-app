const path=require('path');
const express=require('express');

const pubicPath=path.join(__dirname,'../public');
const port=process.env.port||3000;
var app=express();

app.use(express.static(pubicPath));

app.listen(port,()=>{
  console.log(`server is up on ${port}`);
});
