import { useState,useEffect } from 'react'
import Home from './components/Home'
import Pokenavbar from './components/Pokenavbar'
import Cart from './components/Cart'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { CartProvider } from './components/CartContext';


function App() {
  const[supplies,setSupplies] = useState([])
  const[cartItems,setCartItems] = useState([])
  const[displayedSupplies,setDisplayedSupplies] = useState([])
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    if (!inputValue){
      setDisplayedSupplies([...supplies])
    } else
    setDisplayedSupplies(supplies.filter(supply=>supply.itemName === inputValue))
  },[inputValue])
  
  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/supplies');
            if (!response.ok) {
                throw new Error('Data could not be fetched!');
            }
            const json_response = await response.json();
      
            setSupplies(()=>json_response); // assign JSON response to the data variable.
            setDisplayedSupplies(()=>json_response)
        } catch (error) {
            console.error('Error fetching supplies', error);
        }
    };

    fetchData();
}, []);


  return (
    <>
  <CartProvider>
    <Router>
      <Pokenavbar inputValue={inputValue} setInputValue={setInputValue}/>
      <Routes>
        <Route exact path="/" element={<Home supplies={displayedSupplies} setCartItems={setCartItems} cartItems={cartItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} supplies={supplies} />} />
      </Routes>
    </Router>
  </CartProvider>
    
      
    </>
  )
}

export default App
