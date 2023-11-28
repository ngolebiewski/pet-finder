import { useEffect, useState } from "react"
import OnePet from "./OnePet";
import OwnerQuery from "./OwnerQuery"

const App = () => {
  const [allPets, setAllPets] = useState([]);

  useEffect(() => {
    try {
      const allPets = async () => {
        const response = await fetch(`/api/v1/pets`);
        const jsonResponse = await response.json();
        setAllPets(jsonResponse);}
      allPets();
    } catch (error) {
      alert(error)
    }
  }, [])

  return (
    <>
      <div>
        <h1>Hello, I'm the Pet Finder <code>API</code></h1>
      </div>
      
      <div>
        <h2>All Pets</h2>
        <p><code>GET '/api/v1/pets'</code> returns an array of all pets.</p>
        <ul>
          {allPets.map((pet) => <li>{pet.name}</li>)}
        </ul>
      </div>

      <div>
        <h2>Get Pet by name parameter</h2>
        <p><code>GET '/api/v1/pets/:name'</code> for a single pet from the database by name parameter.</p>
        <p>Example: <code>'/api/v1/pets/Fido'</code> </p>
        <OnePet />
      </div>

      <div>
        <h2>Find Pet Info by owner Query</h2>
        <p>Example <code>GET '/api/v1/pets/owner?owner=John'</code></p>
          <OwnerQuery />
        </div>
    </>
  )
}

export default App
