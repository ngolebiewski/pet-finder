import { useEffect, useState } from "react"

const OwnerQuery = () => {
  const [ownerData, setOwnerData] = useState([]);

  useEffect(() => {
    try {
      const ownerPets = async () => {
        const response = await fetch(`/api/v1/pets/owner?owner=John`);
        const jsonResponse = await response.json();
        setOwnerData(jsonResponse);
      }
      ownerPets();
    } catch (error) {
      alert(error)
    }
  }, [])

  
  return (
    <ul>
      {ownerData.map((pet) => <li>{pet.name}</li>)}
    </ul>
  )
}

export default OwnerQuery;