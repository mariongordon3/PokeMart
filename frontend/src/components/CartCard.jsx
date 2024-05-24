import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState,useEffect } from 'react'

function CartCard({ itemName, popularity, durability, price, quantity, region, supplies, setCartItems, cartItems,setTotalCost, totalCost }) {
    const[orderQuantity,setOrderQuantity] = useState(0)
    const[pokeImg,setPokeImg] = useState('')
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
      <Card.Img variant="top" src={pokeImg} />
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


