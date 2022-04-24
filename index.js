const express=require('express');
const app=express();
const port=5000;

//Use Router
app.use('/',require('./routes'));

//Set up view engine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,(err)=>{
    if(err){
        console.log(`Error in running the server ${err}`);
    }
    console.log(`Server is up and running at ${port}`);
})