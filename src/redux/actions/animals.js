export const getAnimals = () => {
  return function(dispatch) {

    return fetch('http://localhost:3001/animals')
    .then(res => res.json())
    .then(animals => dispatch({type: 'FETCH_ANIMALS', payload: animals}));

  };
};

export const addAnimal = aObj => {
  console.log(aObj);
  return dispatch => {
    fetch('http://localhost:3001/animals', {
      method: "POST",
      body: JSON.stringify({ animal: aObj })
  })
  .then(res => res.json())
  .then(animal => dispatch({
    type: 'ANIMAL_CREATED',
    payload: animal
  }))
 };

};
