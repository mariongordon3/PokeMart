import React from "react"
import Pokeitem from "./Card"
export default function Home(props){
    const {supplies}=props
    console.log('supplies',supplies)
    return(
        <>
        <div className="cardContainer">
            {supplies.map(item=> <Pokeitem key={item._id} itemName={item.itemName} popularity={item.popularity} durability={item.durability} price={item.price} region={item.region} quantity={item.quantity} />)}
        </div>
        </>
    )
}