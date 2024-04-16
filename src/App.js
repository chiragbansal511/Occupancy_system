import './App.css';
import finaldata from "./data.json"
import { useState } from 'react';

function App() {

  const [location, setLocation] = useState([]);
  const R = 6371;

  const finder = (range, givenlocation) => {

    finaldata.forEach(element => {
      
      const difflat = element.latitude * (Math.PI / 180) - givenlocation.latitude * (Math.PI / 180);
      const difflon = element.longitude * (Math.PI / 180) - givenlocation.longitude * (Math.PI / 180);

     let a = Math.sin(difflat / 2) ** 2 + Math.cos(element.latitude * (Math.PI / 180)) * Math.cos(givenlocation.latitude * (Math.PI / 180)) * Math.sin(difflon / 2) ** 2
     let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
     let distance = R * c

      if(distance <= range) 
      setLocation(prevvalue=>[element , ...prevvalue]);
    });
  }

  return (
    <div className="App">
      <button onClick={()=>{finder(10 , {
         latitude : 40.68894,
         longitude : 76.39308

      })}}>finder</button>

      {JSON.stringify(location)}
    </div>
  );
}

export default App;
