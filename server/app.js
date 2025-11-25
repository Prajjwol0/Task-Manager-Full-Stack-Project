require('dotenv').config()

const express = require('express');
const cors=require('cors')
const app=express();
const db=require('./db/db.js')
const task=require('./model/taskModel.js')
const route=require('./route/taskRoute.js')


app.use(express.json());
app.use(cors());

// Routes
app.use('/api',route)
app.use('/api',require('./route/protectedRoute.js'))
app.use('/api',require('./route/loginRoute.js'))
app.use('/api',require('./route/signupRoute.js'))

const port=process.env.PORT 

app.listen(port,()=>{
    console.log(`App is listening on port ${port} `);
})