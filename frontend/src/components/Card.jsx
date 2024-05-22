
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Pokeitem(props) {
const {itemName,popularity,durability,price,quantity,region,supplies,setCartItems,CartItems} = props
function addItem(itemName){
    
    const addedSupply=supplies.filter((item)=>{return item.itemName==itemName})
    setCartItems([...CartItems,addedSupply])
}
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{itemName}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Popularity: {popularity}</ListGroup.Item>
            <ListGroup.Item>Durability: {durability}</ListGroup.Item>
            <ListGroup.Item>Price: {price}</ListGroup.Item>
            <ListGroup.Item>Quantity: {quantity}</ListGroup.Item>
            <ListGroup.Item>Region: {region}</ListGroup.Item>
        </ListGroup>
        <Button onClick={()=>{addItem(itemName)}} variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Pokeitem;