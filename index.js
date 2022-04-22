const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Running my node CRUD server');
})

app.listen(port,()=>{
    console.log("CRUD my server is running")
})