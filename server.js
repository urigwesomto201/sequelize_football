// imp[ort express framework 
const express = require('express')
//import sequelize instance from the database file 
const sequelize = require('./database/sequelize');

const router= require('./routes/router')

//declare PORT 
const PORT = 1018;

//instNTIte express 
const app =express();

//use the express body parse middleware
app.use(express.json());

app.use(router);
 //create an async function 
 const server = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection to database established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
 }

 server()
//port listening

app.listen(PORT,()=>{
    console.log(`server is listening to: ${PORT}`)
})