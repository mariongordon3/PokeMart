import React from 'react';
import CartCard from './CartCard';
import { useCart } from './CartContext';
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react'

export default function Cart(props) {
  const {supplies} = props
  const { cartItems,setCartItems } = useCart();
  const[totalCost,setTotalCost] = useState(0)
  const[ordered,setOrdered] =useState(false)
  const[randomNumber,setRandomNumber] = useState(0)
    async function Order(){
        confirm("Send order?")
        setRandomNumber(Math.floor(Math.random() * supplies.length-1))
        try{
            const response = await fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({cartItems}),
            });
            const result = await response.json();
            console.log("Success:", result);
            alert("Your order is complete!")
            setCartItems([])
            setTotalCost(0)
            setOrdered(true)
            }
        catch (error) {
        console.error("Error:", error);
            }
    }
    
  
  return (
    <>  
        {ordered? <h1 className='cartNotice'>Thank You!!</h1>:<h1 className='cartNotice'>Please complete your order</h1>}
        <div className="cardContainer">
        {cartItems.map(item => (
            <CartCard
            key={item._id}
            itemName={item.itemName}
            popularity={item.popularity}
            durability={item.durability}
            price={item.price}
            region={item.region}
            quantity={item.quantity}
            cartItems={cartItems}
            totalCost={totalCost}
            setTotalCost={setTotalCost}
            />
        ))}
        {
            ordered?
            <div key={supplies[8]._id}>
                <h2>Future Recommended Purchase</h2>
                <CartCard
                key={supplies[8]._id}
                itemName={supplies[8].itemName}
                popularity={supplies[8].popularity}
                durability={supplies[8].durability}
                price={supplies[8].price}
                region={supplies[8].region}
                quantity={supplies[8].quantity}
                cartItems={cartItems}
                totalCost={totalCost}
                setTotalCost={setTotalCost}
                />
            </div>
            :null
            
        }
        </div>
        <div className='orderInfo'>
            <h5>Total Price: {totalCost} Poke Dollars</h5>
            <form>
                <label> card number
                   <input type="text" /> 
                </label>   
                <label> shipping address
                   <input type="text" /> 
                </label>

            </form>
        </div>
        <Button className='orderButton' onClick={()=>{Order()}}>Order Now  </Button>
    </>
    
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
