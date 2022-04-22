const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Running my node CRUD server');
})

//mongodb user info
// User: dbuser1
// Password: LlGf6EfsbWgL6qsL



const uri = "mongodb+srv://dbuser1:LlGf6EfsbWgL6qsL@cluster0.ntqok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('db connected')
  // perform actions on the collection object
  client.close();
});


app.listen(port,()=>{
    console.log("CRUD my server is running")
})