import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState,useEffect } from 'react'
import Alert from 'react-bootstrap/Alert';

function Pokeitem({ itemName, popularity, durability, price, quantity, region, supplies, setCartItems, cartItems }) {
    const[pokeImg,setPokeImg] = useState('')
    function addItem(itemName) {
    const addedSupply = supplies.find((item) => item.itemName === itemName);
    console.log(addedSupply)
    setCartItems([...cartItems, addedSupply]);
    alert(`${addedSupply.itemName} has been added to cart`)
  }
  useEffect(() => {
    const fetchImg = () => {
        switch(itemName){
            case 'pokeball':
                setPokeImg('pokeball.png');
                break;
            case 'greatball':
                setPokeImg('greatball.png');
                break;
            case 'ultraball':
                setPokeImg('ultraball.png');
                break;
            case 'masterball':
                setPokeImg('masterball.png');
                break;
            case 'potion':
                setPokeImg('potion.png');
                break;
            case 'superpotion':
                setPokeImg('superpotion.png');
                break;
            case 'hyperpotion':
                setPokeImg('hyperpotion.png');
                break;
            case 'maxpotion':
                setPokeImg('maxpotion.png');
                break;
            case 'Burn Heal':
                setPokeImg('burn_heal.png');
                break;
            case 'Antidote':
                setPokeImg('antidote.png');
                break;
            case 'Awakening':
                setPokeImg('awakening.png');
                break;
            case 'Fire Stone':
                setPokeImg('fire_stone.png');
                break;
            case 'Full Heal':
                setPokeImg('full_heal.png');
                break;
            case 'Hyper Potion':
                setPokeImg('hyperpotion.png');
                break;
            case 'Leaf Stone':
                setPokeImg('leaf_stone.png');
                break;
            case 'Moon Stone':
                setPokeImg('moon_stone.png');
                break;
            case 'Revive':
                setPokeImg('revive.png');
                break;
            case 'Thunderstone':
                setPokeImg('thunderstone.png');
                break;
            case 'Water Stone':
                setPokeImg('water_stone.png');
                break;
            case 'Adamant Orb':
                setPokeImg('adamant_orb.png');
                break;
            case 'Big Root':
                setPokeImg('big_root.png');
                break;
            case 'Choice Scarf':
                setPokeImg('choice_scarf.png');
                break;
            case 'Damp Rock':
                setPokeImg('damp_rock.png');
                break;
            case 'Destiny Knot':
                setPokeImg('destiny_knot.png');
                break;
            case 'Dragon Scale':
                setPokeImg('dragon_scale.png');
                break;
            case 'Escape Rope':
                setPokeImg('escape_rope.png');
                break;
            case 'Expert Belt':
                setPokeImg('expert_belt.png');
                break;
            case 'Full Restore':
                setPokeImg('full_restore.png');
                break;
        }
        
        console.log(pokeImg)
    };

    fetchImg();
}, []);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pokeImg?pokeImg:'pokeball.png'} />
      <Card.Body>
        <Card.Title>{itemName}</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Popularity: {popularity}</ListGroup.Item>
          <ListGroup.Item>Durability: {durability}</ListGroup.Item>
          <ListGroup.Item>Price: {price} Poke Dollars</ListGroup.Item>
          <ListGroup.Item>Quantity: {quantity}</ListGroup.Item>
          <ListGroup.Item>Region: {region}</ListGroup.Item>
        </ListGroup>
        <Button onClick={() => addItem(itemName)} disabled={quantity?false:true} variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Pokeitem;


