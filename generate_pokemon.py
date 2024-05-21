import json
from bson import ObjectId
import random

# Function to generate random ObjectId
def generate_object_id():
    return str(ObjectId())

# Sample data to choose from
item_names = ["pokeball", "greatball", "ultraball", "masterball", "potion", "superpotion", "hyperpotion", "maxpotion"]
popularities = ["low", "medium", "high"]
durabilities = ["low", "medium", "high"]
prices = [5, 10, 20, 50, 100, 200, 500]

# Generate 1000 items
items = []
for _ in range(1000):
    item = {
        "_id": {
            "$oid": generate_object_id()
        },
        "itemName": random.choice(item_names),
        "popularity": random.choice(popularities),
        "durability": random.choice(durabilities),
        "price": random.choice(prices)
    }
    items.append(item)

# Convert the list to JSON
json_data = json.dumps(items, indent=2)

# Save to a file (optional)
with open("pokemart_items.json", "w") as file:
    file.write(json_data)

print(json_data)
