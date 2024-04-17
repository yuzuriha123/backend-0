const express=require('express');
const path=require('path')
const configViewEngine= require('./config/viewEngine')
const webRouter=require('./routes/web')
const port=3000;
const app =express();



configViewEngine(app);

app.use('/v1',webRouter)



app.listen(port,()=>{
    console.log("listen port 3000")
})
