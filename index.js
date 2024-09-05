// require instances
const express = require("express");
require("dotenv").config();
const database = require("./config/database");
const todoRoutes = require('./routes/todos');


// make app
const app = express();

// make port
const PORT = process.env.PORT;

// connect with database
database();

// add middleware for parsing json data
app.use(express.json());

// makes routes
app.use('/api/v1',todoRoutes);

// listen our app on given port
app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`)
});
