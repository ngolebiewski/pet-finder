import { useEffect, useState } from "react"

const OnePet = () => {
  const [petData, setPetData] = useState([]);

  useEffect(() => {
    try {
      const onePet = async () => {
        const response = await fetch(`/api/v1/pets/Fido`);
        const jsonResponse = await response.json();
        setPetData(jsonResponse);
        console.log(petData);
      }
      onePet();
    } catch (error) {
      alert(error)
    }
  }, [])

  return (
    <>
      {petData.map((pet) =>
        <ul>
          <li className="bold">name: {pet.name}</li>
          <li>id: {pet.id}</li>
          <li>breed: {pet.breed}</li> 
          <li>owner: {pet.owner} </li>
        </ul>
        )}
    </>
  )
}

export default OnePet;