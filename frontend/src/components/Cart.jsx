import React from 'react';
import Pokeitem from './Card';
import { useCart } from './CartContext';
import Button from 'react-bootstrap/Button';

export default function Cart() {
  const { cartItems } = useCart();
  async function update() {
    // add a filter/map to perform on all cart items
    try {
    quantity-=1
      const response = await fetch(`http://localhost:5000/supplies/update/${addedSupply._id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({quantity}),
      });
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  return (
    <div className="cardContainer">
      {cartItems.map(item => (
        <Pokeitem
          key={item._id}
          itemName={item.itemName}
          popularity={item.popularity}
          durability={item.durability}
          price={item.price}
          region={item.region}
          quantity={item.quantity}
        />
      ))}
      <Button>Order Now  </Button>
    </div>
  );
}


// import { useState } from "react"
// import { backEndApi } from "./utilities"
// export default function Ingredient(props){
//     const { ingredient,journal,plate,foodAmount,setFoodAmount,setClick,click } = props
//     const delete_ingredient = ()=>{
//         let response = backEndApi.delete(`journal/${journal.id}/plate/${plate.id}/ingredient/${ingredient.id}`).then((response)=>{ console.log(response)
//         setClick(!click)
//         }).catch((error)=>{
//             console.log(error)
//         })
//     }
//     const addFood = ()=>{
//         let response = backEndApi.put(`journal/${journal.id}/plate/${plate.id}/ingredient/${ingredient.id}`,{'amount':foodAmount}).then((response)=>{ console.log(response)
//         setClick(!click)
//         }).catch((error)=>{
//             console.log(error)
//         })
//     }
//     return(
//         <div>
//             <li>{ingredient?ingredient.name:null},Amount: {ingredient?ingredient.amount_consumed:null}</li>
//             <input type="text" 
//             placeholder="enter amount" onChange={(e)=>{
//                 setFoodAmount(e.target.value)
//             }}></input>
//             <button onClick={addFood}>add amount</button>
//             <button onClick={delete_ingredient}>delete</button>
//         </div>
//     )
// }
