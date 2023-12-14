import { useState } from 'react'
import './App.css'
import { puppyList } from './data.js'
import './index.css'

function App() {
  
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(puppyId) {
    console.log("puppy id: ", puppyId);
    setFeatPupId(puppyId);
  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  
  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p onClick={() => handleClick(puppy.id)} key={puppy.id} style={{backgroundColor: "lightgrey", borderRadius: "0 20px 0 20px", padding:"10px", color:"black"}}>
          {puppy.name}
        </p>
      ))}
      {featPupId && (
        <div>
          <h2 style={{backgroundColor: "black", borderRadius: "50px 50px 50px 50px", padding:"10px"}}>{featuredPup.name}</h2>
          <ul> 
            <li style={{listStyleType: "none"}}>Age: {featuredPup.age}</li>
            <li style={{listStyleType: "none"}}> Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App

