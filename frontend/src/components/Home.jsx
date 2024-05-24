import React from 'react';
import Pokeitem from './Card';
import { useCart } from './CartContext';

export default function Home({ supplies }) {
  const { cartItems, setCartItems } = useCart();

  return (
    <>
        <h1 className='welcome'>Welcome to the PokeMart!</h1>
        <div className="cardContainer">
        {supplies.map(item => (
            <Pokeitem
            key={item._id}
            itemName={item.itemName}
            popularity={item.popularity}
            durability={item.durability}
            price={item.price}
            region={item.region}
            quantity={item.quantity}
            supplies={supplies}
            setCartItems={setCartItems}
            cartItems={cartItems}
            />
        ))}
        </div>
    </>
    
  );
}
