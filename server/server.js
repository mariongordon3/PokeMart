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

app.get('/supplies',async(req,res)=>{
    try{
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const supplies = await collection.find({}).toArray();
        res.json(supplies);
    }
    catch (err) {
        console.error('Error:', err);
        res.status(500).send('error getting supplies');
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});