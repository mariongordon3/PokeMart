import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState,useEffect } from 'react'

function CartCard({ itemName, popularity, durability, price, quantity, region, supplies, setCartItems, cartItems,setTotalCost, totalCost }) {
    const[orderQuantity,setOrderQuantity] = useState(0)
    function addQuantity(event) {
        console.log(cartItems)
        let totalQuantity = quantity-orderQuantity
        let currenCost = orderQuantity*price
        if(totalQuantity>0){
            console.log(totalQuantity)
        }
        else{
            console.log('sorry we dont have enough')
        }
        setTotalCost(totalCost+currenCost)
        console.log(totalCost)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="pokeball.jpg" />
      <Card.Body>
        <Card.Title>{itemName}</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Price: {price}</ListGroup.Item>
          <ListGroup.Item>Region: {region}</ListGroup.Item>
          <form>
            <input type="number" placeholder='enter quantity' value={orderQuantity} onChange={e=>setOrderQuantity(e.target.value)}/>
            <Button onClick={addQuantity} variant="primary">Submit</Button>
          </form>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default CartCard;


// async function update() {
//     // add a filter/map to perform on all cart items
//     try {
//     quantity-=1
//       const response = await fetch(`http://localhost:5000/supplies/update/${addedSupply._id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({quantity}),
//       });
//       const result = await response.json();
//       console.log("Success:", result);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }