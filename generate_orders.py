import random
from bson import ObjectId
import json

def generate_object_id():
    return str(ObjectId())

# Sample data to choose from
item_names = ["pokeball", "greatball", "ultraball", "masterball", "potion", "superpotion", "hyperpotion", "maxpotion", "Burn Heal", "Antidote", "Awakening", "Fire Stone", "Full Heal", "Hyper Potion", "Leaf Stone", "Moon Stone", "Revive", "Thunderstone", "Water Stone", "Adamant Orb", "Big Root", "Choice Scarf", "Damp Rock", "Destiny Knot", "Dragon Scale", "Escape Rope", "Expert Belt", "Full Restore"]
popularities = ["low", "medium", "high"]
durabilities = ["low", "medium", "high"]
prices = [5, 10, 20, 50, 100, 200, 500]
regions = ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Alola", "Galar", "Paldea"]

def create_order(items, order_id):
    num_items = random.randint(1, 3)
    order_items = random.sample(items, num_items)
    order = {
        "_id": {
            "$oid": order_id
        },
        "items": [
            {
                "item_name": item["itemName"]
            } for item in order_items
        ],
        "total_price": sum(item["price"] for item in order_items)
    }
    return order

# Generate sample items
cartItems = []
for item_name in item_names:
    item = {
        "_id": {
            "$oid": generate_object_id()
        },
        "itemName": item_name,
        "popularity": random.choice(popularities),
        "durability": random.choice(durabilities),
        "price": random.choice(prices),
        "quantity": random.choice(range(10, 50)),
        "region": random.choice(regions)
    }
    cartItems.append(item)

# Generate 1000 orders
orders = [create_order(cartItems, generate_object_id()) for _ in range(1000)]

# Save orders to a JSON file
with open('orders.json', 'w') as file:
    json.dump(orders, file, indent=4)

print("1000 orders have been generated and saved to orders.json")

