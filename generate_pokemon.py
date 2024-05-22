import json
from bson import ObjectId
import random

# Function to generate random ObjectId
def generate_object_id():
    return str(ObjectId())

# Sample data to choose from
item_names = ["pokeball", "greatball", "ultraball", "masterball", "potion", "superpotion", "hyperpotion", "maxpotion","Burn Heal", "Antidote", "Awakening", "Fire Stone", "Full Heal", "Hyper Potion", "Leaf Stone", "Moon Stone", "Revive", "Thunderstone"," Water Stone", "Adamant Orb"," Big Root", "Choice Scarf", "Damp Rock", "Destiny Knot", "Dragon Scale", "Escape Rope", "Expert Belt", "Full Restore"]
popularities = ["low", "medium", "high"]
durabilities = ["low", "medium", "high"]
prices = [5, 10, 20, 50, 100, 200, 500]
regions = ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Alola", "Galar", "Paldea"]
# Generate 1000 items
items = []
for item in item_names:
    item = {
        "_id": {
            "$oid": generate_object_id()
        },
        "itemName": item,
        "popularity": random.choice(popularities),
        "durability": random.choice(durabilities),
        "price": random.choice(prices),
        "quantity": random.choice(range(10,50)),
        "region": random.choice(regions)
    }
    items.append(item)

# Convert the list to JSON
json_data = json.dumps(items, indent=2)

# Save to a file (optional)
with open("pokemart_items.json", "w") as file:
    file.write(json_data)

print(json_data)
