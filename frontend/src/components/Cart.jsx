
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Pokeitem from './Card';
export default function Cart(props){
    const {cartItems}=props
    console.log(cartItems)
    return(
        <>
         <div className="cardContainer">
            {cartItems.map(item=> <Pokeitem key={item._id} itemName={item.itemName} popularity={item.popularity} durability={item.durability} price={item.price} region={item.region} quantity={item.quantity} supplies={supplies} setCartItems={setCartItems}/>)}
        </div>
        </>
    )
}