export const getAnimals = () => {
  return dispatch => {

    fetch(`http://localhost:3001/animals`)
    .then(res => res.json())
    .then(animals => dispatch({
      type: 'FETCH_ANIMALS',
      payload: animals
    })
  );

  };
};

 export const addAnimal = aObj => {
   const animalToAdd = { animal: aObj };
   return dispatch => {
     fetch(`http://localhost:3001/animals`, {
       method: 'POST',
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(animalToAdd)
     })

  .then(res => res.json())
  .then(animal =>
     dispatch({
       type: 'ANIMAL_ADDED',
       payload: animal
   })
 );
};
};
