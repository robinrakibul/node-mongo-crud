const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Running my node CRUD server');
})

//mongodb user info
// User: dbuser1
// Password: LlGf6EfsbWgL6qsL



const uri = "mongodb+srv://dbuser1:LlGf6EfsbWgL6qsL@cluster0.ntqok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const userCollection = client.db("foodExpress").collection("user");

        app.get('/users', async (req,res)=>{
            const query = {};
            const cursor = userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users);
        })
        
        // POST user: add a new user
        app.post('/user', async (req, res) => {
            const newUser = req.body;
            console.log('adding new user', newUser);
            const result = await userCollection.insertOne(newUser);
            res.send({ result: 'success' });
        })
    }
    finally {
        // await client.close();
    }
}


run().catch(console.dir);

app.listen(port, () => {
    console.log("CRUD my server is running")
})