import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Pokeitem({ itemName, popularity, durability, price, quantity, region, supplies, setCartItems, cartItems }) {
    function addItem(itemName) {
    const addedSupply = supplies.find((item) => item.itemName === itemName);
    console.log(addedSupply)
    setCartItems([...cartItems, addedSupply]);
    
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="pokeball.jpg" />
      <Card.Body>
        <Card.Title>{itemName}</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Popularity: {popularity}</ListGroup.Item>
          <ListGroup.Item>Durability: {durability}</ListGroup.Item>
          <ListGroup.Item>Price: {price}</ListGroup.Item>
          <ListGroup.Item>Quantity: {quantity}</ListGroup.Item>
          <ListGroup.Item>Region: {region}</ListGroup.Item>
        </ListGroup>
        <Button onClick={() => addItem(itemName)} disabled={quantity?false:true} variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Pokeitem;
