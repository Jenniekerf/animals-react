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

 export const addAnimal = (aObj, history) => {
   return dispatch => {
     fetch(`http://localhost:3001/animals`, {
       method: 'POST',
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({animal: aObj})
     })

  .then(res => res.json())
  .then(animal => {
     dispatch({
       type: 'ANIMAL_ADDED',
       payload: animal
     })

     history.push("/animals")
  });
 };
};

export const deleteAnimal = (id, history) => {
  return dispatch => {
    fetch(`http://localhost:3001/animals/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(id => {
      dispatch({
        type: 'DELETED_ANIMAL',
        payload: id })
      history.push("/animals");
    });
  };
};


export const updateAnimal = (aObj, id, history) => {
  return dispatch => {
    return fetch(`http://localhost:3001/animals/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({animal: aObj})
    })
    .then(res => res.json())
    .then(updatedAnimal => {
      dispatch({
        type: "UPDATED_ANIMAL",
        payload: updatedAnimal})
        history.push(`/animals/${updatedAnimal.id}`);
    });
  };
};
