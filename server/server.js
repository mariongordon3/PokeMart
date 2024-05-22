import { MongoClient, ObjectId } from 'mongodb';
import cors from 'cors';
const url = 'mongodb://localhost:27017';
const dbName = "pokemart";
const collectionName = "supplies";
import express from 'express';

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

app.get('/supplies', async (req, res) => {
    try {
        console.log("in the supplies route to get all supplies")
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const supplies = await collection.find({}).toArray();
        res.json(supplies);
    }
    catch (err) {
        console.error('Error:', err);
        res.status(500).send('error GETting supplies');
    }
})

app.get('/supplies/region/:region', async (req, res) => {
    try {
        console.log("in the get supplies from a specific region route")
        // connect to the collection
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        // grab region from the params
        const region = req.params.region;
        console.log("req.params.region", req.params.region)
        const items = await collection.find({ region: region }).toArray();
        res.json(items);
    }
    catch (err) {
        console.error('Error:', err);
        res.status(500).send('error GETting supplies from region');
    }
})

app.get('/supplies/name/:name', async (req, res) => {
    try {
        console.log("in the get supplies with a specific name")
        // connect to the collection
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        // grab name from the params (params are a key value pair in body)
        const name = req.params.name;
        console.log("req.params.name", req.params.name)
        const item = await collection.findOne({ itemName: name });
        res.json(item);
    }
    catch (err) {
        console.error('Error:', err);
        res.status(500).send('error GETting supplies by name');
    }
})

app.get('/supplies/id/:id', async (req, res) => {
    try {
        console.log("in the get supplies with a specific id")
        // connect to the collection
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        // grab name from the params (params are a key value pair in body)
        const id = req.params.id;
        console.log("req.params.name", req.params.id)
        const item = collection.findOne({ _id: new ObjectId(id) });
        res.json(item);
    }
    catch (err) {
        console.error('Error:', err);
        res.status(500).send('error GETting supplies by name');
    }
})

app.post('/supplies', async (req, res) => {
    try {
        const item = req.body;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(item);
        res.status(201).send(`{"_id":"${result.insertedId}"}`);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Error adding item');
    }
})

app.put('/supplies/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;
        console.log('Updating quantity for item with id:', id);
        // connect to mongodb
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        // update the quantity of the item with a specific id
        const items = await collection.updateMany({ _id: new ObjectId(id) }, { $set: { "quantity": quantity } });
        res.status(200).send({
            status: 'success',
            data: quantity, // This URL should point to the newly created user
            message: 'Item quanitiy updated successfully.'
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send(`Error updating quantity for item with id ${id}`);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});