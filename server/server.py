from flask import Flask, jsonify
from pymongo import MongoClient
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
# cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
@app.route('/supplies')
def get_all_supplies():
    client = MongoClient('mongodb://localhost:27017')
    db = client.pokemart
    collection = db.supplies

    # Fetch all documents in the collection and convert to a list
    supplies = list(collection.find())
    
    # Convert ObjectId to string for JSON serialization
    for supply in supplies:
        supply['_id'] = str(supply['_id'])

    return jsonify(supplies)

if __name__ == '__main__':
    app.run(port=5000)

#     try {
#         const client = await MongoClient.connect(url);
#         const db = client.db(dbName);
#         const collection = db.collection(collectionName);
#         const socks = await collection.find({}).toArray();
#     res.json(socks);
#     } catch (err) {
#         console.error("Error:", err);
#         res.status(500).send("Hmmm, something smells... No socks for you! ☹");
#     }
# });