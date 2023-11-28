const express = require('express');
const pets = require('./data.cjs');
const app = express();

const PORT = 8000;

//check that the server is working
app.listen(PORT, () => console.log(`Check 1,2, 1, 2 on Port: ${PORT}`));

//say it's ok to send all files in the dist folder to the browser
app.use(express.static('./dist'));

//GET all pets with the ROUTE /api/v1/pets
  //look at data in Postman, choose GET and  "http://localhost:8000/api/v1/pets" 
app.get('/api/v1/pets', (req, res) => {
  res.send(pets);
} )

//GET - pet by owner name via QUERY - '/api/v1/pets/owner' anf use req.query to find owner
app.get('/api/v1/pets/owner', (req, res) => {
  //use "?owner=Jane" as your format
  const { owner } = req.query;
  const petsOfOwner = pets.filter((pet) => pet.owner === owner);
  res.send(petsOfOwner);
})

//GET - pet by name - '/api/v1/pets/:name' for a single pet from the database by name parameter.
  //use req.params and then filter by pet name
app.get('/api/v1/pets/:name', (req, res) => {
  const petName = req.params.name;
  const petByName = pets.filter((pet) => pet.name === petName);
  console.log(petByName);
  res.send(petByName);
})

//GET - client homepage - '/' & make pretty things with React
  //Serve the client homepage that renders the data in the browser, use the __dirname + dist for path
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})
