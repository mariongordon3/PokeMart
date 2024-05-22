import React from "react"
import Pokeitem from "./Card"
export default function Home(props){
    const {supplies,setCartItems,cartItems}=props
    console.log(cartItems)
    return(
        <>
        <div className="cardContainer">
            {supplies.map(item=> <Pokeitem key={item._id} itemName={item.itemName} popularity={item.popularity} durability={item.durability} price={item.price} region={item.region} quantity={item.quantity} supplies={supplies} setCartItems={setCartItems} CartItems={cartItems}/>)}
        </div>
        </>
    )
}