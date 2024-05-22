import { useState,useEffect } from 'react'
import Home from './components/Home'
import Pokenavbar from './components/Pokenavbar'
import Cart from './components/Cart'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  const[supplies,setSupplies] = useState([])
  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/supplies');
            if (!response.ok) {
                throw new Error('Data could not be fetched!');
            }
            const json_response = await response.json();
            console.log(json_response)
            setSupplies(json_response); // assign JSON response to the data variable.
        } catch (error) {
            console.error('Error fetching supplies', error);
        }
    };

    fetchData();
}, []);
  return (
    <>
    <Router>
      <Pokenavbar />
      <Routes>
        <Route exact path="/" element={<Home supplies={supplies} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
