export const getAnimals = () => {
  return function(dispatch) {

    return fetch('http://localhost:3001/animals')
    .then(res => res.json())
    .then(animals => console.log(animals))

  };
};
