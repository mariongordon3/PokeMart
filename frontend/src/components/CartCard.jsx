import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState,useEffect } from 'react'

function CartCard({ itemName, popularity, durability, price, quantity, region, supplies, setCartItems, cartItems }) {
    const[orderQuantity,setOrderQuantity] = useState(0)
    function addQuantity(event) {
    console.log(orderQuantity)
    
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
