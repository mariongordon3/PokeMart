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

# Function to create an order item
def create_order_item():
    return {
        "itemName": random.choice(item_names),
        "popularity": random.choice(popularities),
        "durability": random.choice(durabilities),
        "price": random.choice(prices),
        "quantity": random.choice(range(1, 11)),  # Assuming the quantity is between 1 and 10
        "region": random.choice(regions)
    }

# Function to create an order with two items
def create_order():
    order = {
        "_id": {
            "$oid": generate_object_id()
        },
        "order1": create_order_item(),
        "order2": create_order_item()
    }
    return order

# Generate 1000 orders
orders = [create_order() for _ in range(1000)]

# Save orders to a JSON file
with open('orders.json', 'w') as file:
    json.dump(orders, file, indent=4)

print("1000 orders have been generated and saved to orders.json")
