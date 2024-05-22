import { useState,useEffect } from 'react'
import Home from './components/Home'
import './App.css'

function App() {
  const[data,setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/supplies');
            if (!response.ok) {
                throw new Error('Data could not be fetched!');
            }
            const json_response = await response.json();
            console.log(json_response)
            setData(json_response); // assign JSON response to the data variable.
        } catch (error) {
            console.error('Error fetching supplies', error);
        }
    };

    fetchData();
}, []);
  return (
    <>
      <Home />
    </>
  )
}

export default App
